
define [
  'App', 'ember', 'ember-data', 'ValpoUtils'
  'Store-REST', './Category'
], (App, Em, DS, VU) ->

  # indexOf = (key, time) ->
  #   index = 0
  #   VU.closest this, (item, idx) ->
  #     index = idx
  #     # console.log "Store::indexOf#closest\t#{key}: ", Em.get(item, key)
  #     time - item.get(key + '.unix')
  #   index

  DS.RESTAdapter.registerTransform 'dateProxy',
    serialize: (value) -> value.toString()
    deserialize: (value) -> VU.D(value)

  # DS.RESTAdapter.registerTransform 'binBool',
  #   serialize: (value) -> if value then 1 else 0
  #   deserialize: (value) -> value is 1

  # DS.RESTAdapter.map 'App.Event',
  #   isAllDay: key: 'allDay'

  Event = DS.Model.extend
    start: DS.attr 'dateProxy'
    end: DS.attr 'dateProxy'
    isAllDay: DS.attr 'boolean'   # DS.attr 'binBool'
    title: DS.attr 'string'
    location: DS.attr 'string'
    description: DS.attr 'string'
    url: DS.attr 'string'
    categories: DS.hasMany 'App.Category'

  # Event.reopenClass
  #   query: (query) ->
  #     data = @all()
  #     if data.get('length') > 2 and query.hasOwnProperty('start') and query.hasOwnProperty('end')
  #       proxy = Em.$.proxy indexOf, data
  #       data = Em.A(data.slice proxy('start', query.start), proxy('end', query.end))

  App.Event = Event
