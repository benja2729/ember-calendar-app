
define [

  # Modules passed to the defined function
  'ember', 'App', 'moment'

  # Ember MVC modules
  'models/Event'

  # Handlebars helpers
  'handlebars/date', 'handlebars/time'

], (Em, App, moment) ->

  App.Router.map ->
    @resource 'events', ->
      @resource 'event', path: ':event_id'

  App.EventsRoute = Em.Route.extend
    model: (params) ->
      App.Event.find()

  App.EventController = Em.ObjectController.extend
    startDate: Em.computed( ->
      moment @get('start')
    ).property 'start'

    endDate: Em.computed( ->
      moment @get('end')
    ).property 'end'

    isMultiDay: Em.computed( ->
      start = @get('startDate').clone().startOf 'day'
      end = @get('endDate').clone().startOf 'day'
      if start.diff(end) < 0 then true else false
    ).property 'startDate', 'endDate'

  # App.EventsController = Em.ArrayController.extend
