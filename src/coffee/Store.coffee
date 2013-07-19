
# TODO: Incorporate a "since" idea for the Store to keep from adding dublicate data
# Actually learn how to use DS.Store and create a custom adapter and serializer

define [
  'App', 'ember', 'ValpoUtils', 'moment'
],(App, Em, VU, moment) ->

  storage = window.sessionStorage
  storageKey = 'calendarStorePersistence'
  hasPersistence = storage?.hasOwnProperty storageKey # and window.JSON?.stringify(true) is 'true'

  getType = (type) ->
    index = if typeof type is 'string' then type
    else Em.get(type, 'type')

  indexOf = (key, time) ->
    index = 0
    VU.closest this, (item, idx) ->
      index = idx
      # console.log "Store::indexOf#closest\t#{key}: ", Em.get(item, key)
      time - moment(Em.get(item, key)).unix()
    index

  Store = Em.Object.extend
    rootUrl: 'https://api.valpo.edu/eventPool/events.php'
    hasPersistence: hasPersistence
    data: Em.Object.create()
    types: {}

    # Flags
    isNew: true
    isLoaded: true
    isSaving: false

    init: ->
      @_super()

      if @get('hasPersistence')
        @set 'data', Em.$.parseJSON(storage.getItem storageKey)
        @set 'isNew', false
      else if storage? then @set 'hasPersistence', true

    addType: (type, objectType = []) ->
      index = Em.String.decamelize(getType type)
      types = @get 'types'
      if types.hasOwnProperty index then return
      data = @get 'data'
      if not data.hasOwnProperty index then data[index] = objectType
      types[index] = if Em.Array.detect objectType then 'array' else Em.$.type objectType

    getTypeOf: (type) ->
      index = Em.String.decamelize(getType type)
      @get('types')[index]

    saveData: (type, key, value) ->
      # console.group 'Store#saveData'
      # console.log type, key, value

      @set 'isSaving', true
      itemType = getType type
      index = Em.String.decamelize(itemType)
      data = @get("data.#{index}")

      if @getTypeOf(index) is 'array'
        data = Em.A data
        if Em.$.isArray key then data.addObjects key
        else data.addObject key
        console.time 'Store#saveData -> sort'
        data.sort (a, b) -> App[itemType].compare a, b
        console.timeEnd 'Store#saveData -> sort'
      else Em.set data, key, value

      @set 'isSaving', false
      console.groupEnd 'Store#saveData'

    # Currently assumes Array
    find: (type, id) ->
      # console.group 'Store#find'
      # console.log type, id
      index = Em.String.decamelize(getType type)
      if Em.$.isPlainObject id then return @findAll type, id
      
      index = Em.String.decamelize(getType type)
      data = @get("data.#{index}")
      if @getTypeOf(index) is 'array' then data = Em.A data
      obj = data.find (item) ->
        parseInt(Em.get(item, 'id')) is parseInt(id)

      result = (if obj is undefined then VU.ObjectPromise.create
        promise: @fetch type, {id}
      else Em.ObjectProxy.create obj
      )

      # console.groupEnd 'Store#find'
      result

    # Currently assumes Array
    findAll: (type, params) ->
      # console.group 'Store#findAll'
      # console.log type, params

      index = Em.String.decamelize(getType type)
      data = @get("data.#{index}")
      if @getTypeOf(index) is 'array' then data = Em.A data

      if index is 'event' and data.get('length') > 2 and params.hasOwnProperty('start') and params.hasOwnProperty('end')
        proxy = Em.$.proxy indexOf, data
        data = Em.A(data.slice proxy('start', params.start), proxy('end', params.end))

      results = data.filter (item) ->
        for k, v of params
          if k isnt 'start' and k isnt 'end'
            value = Em.get item, k
            if value is undefined then return false
            if v isnt value then return false
        true

      result = (if results and Em.get(results, 'length') is 0
        VU.ArrayPromise.create
          promise: @fetch type, params
          itemClass: type
      else
        Em.ArrayProxy.create
          content: Em.A results
      )

      # console.groupEnd 'Store#findAll'
      result

    fetch: (type, params) ->
      # console.group 'Store#fetch'
      # console.log type, params

      console.time 'Store#fetch - loading'
      @set 'isLoaded', false

      promise = Em.$.ajax
        url: @get('rootUrl')
        dataType: 'json'
        data: params

      # console.groupEnd 'Store#fetch'

      promise.done (data) =>
        # console.group 'Store#fetch - promise:done'
        if @get('isNew') then @set 'isNew', false
        @set 'isLoaded', true
        @saveData type, data.ResultSet
        console.timeEnd 'Store#fetch - loading'
        # console.groupEnd 'Store#fetch - promise:done'

    saveToPersistence: Em.observer( ->
      if @get('hasPersistence') and not @get('isNew') and not @get('isSaving')
        console.time 'App.Store#saveToPersistence'
        storage.setItem storageKey, JSON.stringify(@get 'data')
        console.timeEnd 'App.Store#saveToPersistence'
    , 'isSaving', 'hasPersistence')

  App.Store = Store.create()
