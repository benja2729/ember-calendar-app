
define ['ember', 'ember-data'], (Em, DS) ->
    
  camelizeKeys = (json) ->
    value = undefined
    for prop of json
      value = json[prop]
      delete json[prop]

      json[camelize(prop)] = value
  munge = (json, callback) ->
    callback json
  applyTransforms = (json, type, transformType) ->
    transforms = registeredTransforms[transformType]
    Ember.assert "You are trying to apply the '" + transformType + "' transforms, but you didn't register any transforms with that name", transforms
    get(type, "attributes").forEach (name, attribute) ->
      attributeType = attribute.type
      value = json[name]
      transform = transforms[attributeType] or defaultTransforms[attributeType]
      Ember.assert "Your model specified the '" + attributeType + "' type for the '" + name + "' attribute, but no transform for that type was registered", transform
      json[name] = transform.deserialize(value)

  ObjectProcessor = (json, type, store) ->
    @json = json
    @type = type
    @store = store
  LoadObjectProcessor = ->
    ObjectProcessor.apply this, arguments_
  loadObjectProcessorFactory = (store, type) ->
    (json) ->
      new LoadObjectProcessor(json, type, store)
  ArrayProcessor = (json, type, array, store) ->
    @json = json
    @type = type
    @array = array
    @store = store
  arrayProcessorFactory = (store, type, array) ->
    (json) ->
      new ArrayProcessor(json, type, array, store)
  hasManyProcessorFactory = (store, record, relationship) ->
    (json) ->
      new HasManyProcessor(json, store, record, relationship)
  SaveProcessor = (record, store, type, includeId) ->
    @record = record
    ObjectProcessor.call this, record.toJSON(includeId: includeId), type, store
  saveProcessorFactory = (store, type, includeId) ->
    (record) ->
      new SaveProcessor(record, store, type, includeId)
  camelize = Ember.String.camelize
  capitalize = Ember.String.capitalize
  get = Ember.get
  map = Ember.ArrayPolyfills.map
  registeredTransforms = undefined
  passthruTransform =
    serialize: (value) ->
      value

    deserialize: (value) ->
      value

  defaultTransforms =
    string: passthruTransform
    boolean: passthruTransform
    number: passthruTransform

  ObjectProcessor:: =
    camelizeKeys: ->
      camelizeKeys @json
      this

    munge: (callback) ->
      munge @json, callback
      this

    applyTransforms: (transformType) ->
      applyTransforms @json, @type, transformType
      this

  LoadObjectProcessor:: = Ember.create(ObjectProcessor::)
  LoadObjectProcessor::load = ->
    @store.load @type, {}, @json

  ArrayProcessor:: =
    load: ->
      store = @store
      type = @type
      references = @json.map((object) ->
        store.load type, {}, object
      )
      @array.load references

    camelizeKeys: ->
      @json.forEach camelizeKeys
      this

    munge: (callback) ->
      @json.forEach (object) ->
        munge object, callback

      this

    applyTransforms: (transformType) ->
      type = @type
      @json.forEach (object) ->
        applyTransforms object, type, transformType

      this

  HasManyProcessor = (json, store, record, relationship) ->
    @json = json
    @store = store
    @record = record
    @type = record.constructor
    @relationship = relationship

  HasManyProcessor:: = Ember.create(ArrayProcessor::)
  HasManyProcessor::load = ->
    store = @store
    ids = map.call(@json, (obj) ->
      obj.id
    )
    store.loadMany @relationship.type, @json
    store.loadHasMany @record, @relationship.key, ids

  SaveProcessor:: = Ember.create(ObjectProcessor::)
  SaveProcessor::save = (callback) ->
    callback @json

  DS.registerTransforms = (kind, object) ->
    registeredTransforms[kind] = object

  DS.clearTransforms = ->
    registeredTransforms = {}

  Adapter = DS.Adapter.extend
    find: (store, type, id) ->
      sync = type.sync
      Ember.assert "You are trying to use the BasicAdapter to find id '" + id + "' of " + type + " but " + type + ".sync was not found", sync
      Ember.assert "The sync code on " + type + " does not implement find(), but you are trying to find id '" + id + "'.", sync.find
      sync.find id, loadObjectProcessorFactory(store, type)

    findAll: (store, type, id) ->
      console.log type.sync

    findQuery: (store, type, query, recordArray) ->
      sync = type.sync
      Ember.assert "You are trying to use the BasicAdapter to query " + type + " but " + type + ".sync was not found", sync
      Ember.assert "The sync code on " + type + " does not implement query(), but you are trying to query " + type + ".", sync.query
      sync.query query, arrayProcessorFactory(store, type, recordArray)

    findHasMany: (store, record, relationship, data) ->
      name = capitalize(relationship.key)
      sync = record.constructor.sync
      processor = hasManyProcessorFactory(store, record, relationship)
      Ember.assert "You are trying to use the BasicAdapter to query " + record.constructor + " but " + record.constructor + ".sync was not found", sync
      options =
        relationship: relationship.key
        data: data

      if sync["find" + name]
        sync["find" + name] record, options, processor
      else if sync.findHasMany
        sync.findHasMany record, options, processor
      else
        Ember.assert "You are trying to use the BasicAdapter to find the " + relationship.key + " has-many relationship, but " + record.constructor + ".sync did not implement findHasMany or find" + name + ".", false

    createRecord: (store, type, record) ->
      sync = type.sync
      sync.createRecord record, saveProcessorFactory(store, type)

    updateRecord: (store, type, record) ->
      sync = type.sync
      sync.updateRecord record, saveProcessorFactory(store, type, true)

    deleteRecord: (store, type, record) ->
      sync = type.sync
      sync.deleteRecord record, saveProcessorFactory(store, type, true)

  DS.clearTransforms()

  Adapter
