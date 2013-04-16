
define [

  # Modules passed to the defined function
  'ember', 'App'

  # Ember MVC modules
  'models/Event'
  'controllers/EventController'
  'views/EventView'

], (Em, App) ->

  App.Router.map ->
    @resource 'events', ->
      @resource 'event', path: ':event_id'

  App.EventsRoute = Em.Route.extend
    model: (params) ->
      App.Event.find()

  App.EventsController = Em.ArrayController.extend
    content: null
    filteredEvents: Em.computed( ->
      Em.A(@get('content').slice 0, 10)
    ).property 'content@each'
