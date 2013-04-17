
###
  This module is more-or-less the file for defining the routes.
  The Router itself is in a separate module and attached to the
  namespace separately. The Router is defined in the "Router" module
###

define [

  # Modules passed to the defined function
  'ember', 'App', 'moment'

  # Ember MVC modules
  'Store', 'models/Event'

  'controllers/MonthController'
  'views/MonthView'

  'controllers/EventController'
  'views/EventView'

], (Em, App, moment) ->

  App.IndexRoute = Em.Route.extend
    redirect: -> @transitionTo 'month'

  App.MonthRoute = Em.Route.extend
    model: -> App.Event.find()
    setupController: (controller, model) ->
      controller.set 'currentDate', moment()
      controller.set 'content', model

  App.EventsRoute = Em.Route.extend
    # model: (params) ->
    #   App.Event.find()
    setupController: (controller, model) ->
      # controller.set 'content', model.filter (item) ->
      #   item.get('description') isnt ''
      controller.set 'content', @controllerFor('month').get('eventsInMonth')

  App.EventsController = Em.ArrayController.extend
    filteredEvents: Em.computed( ->
      Em.A(@get('content').slice 0, 10)
    ).property 'content@each'
