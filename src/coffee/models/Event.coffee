
define ['App', 'ember', 'Store'], (App, Em, Store) ->

  Event = Em.ObjectProxy.extend Em.Comparable,
    store: Store

    compare: (event) -> Event.compare this, event

  Event.reopenClass
    type: 'Event'

    compare: (a, b) ->
      Date.parse(Em.get a, 'start') - Date.parse(Em.get b, 'start')

    find: (params) ->
      # This may be a problem in the future
      Store.find Event, params

  Store.addType 'Event', []

  App.Event = Event
