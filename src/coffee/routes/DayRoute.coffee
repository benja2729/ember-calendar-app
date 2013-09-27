
require 'models/Event'
require 'controllers/DayController'
require 'views/DayView'

format = 'MM-DD-YYYY'
today = new Date()

getRange = (input) ->
  m = if typeof input is 'string' then moment input, format
  else moment input
  {
    start: m.startOf('day').unix()
    end: m.endOf('day').unix()
  }

App.DayRoute = Em.Route.extend
  model: (params) ->
    params.day ?= 'today'
    day = getRange if params.day is 'today' then today
    else params.day

    @loadDay day

  serialize: (model, params) ->
    ret = {}
    start = moment(model.get 'firstObject.start')
    ret['day'] = if start.date() is today.getDate() then 'today'
    else start.format format
    ret

  setupController: (controller, model) ->
    controller.setProperties
      model: model
      today: today

  loadDay: (range) ->
    store = @get 'store'
    store.find 'event', range

  actions:
    transitionToDay: (input) ->
      day = getRange input
      model = @loadDay day
      @transitionTo 'day', model

    transitionToEvent: (model) ->
      @transitionTo 'event', model

    showEvent: (event) -> alert 'DayRoute#showEvent says: "You still need to implement this"'
