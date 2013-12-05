
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
    start = moment(model.findBy('isMultiDay', false).get('start') )
    ret['day'] = if start.date() is today.getDate() then 'today'
    else start.format format
    ret

  setupController: (controller, model) ->
    controller.setProperties
      model: model
      today: today

  loadDay: (range) ->
    store = @get 'store'
    twix = moment.unix(range.start).twix(moment.unix range.end)
    store.filter 'event', range, (item) ->
      range = item.get 'range'
      # console.log item.get('title'), range.simpleFormat('MMM DD h:mm'), twix.overlaps(range)
      twix.overlaps(range) or twix.engulfs(range)

  actions:
    transitionToDay: (input) ->
      day = getRange input
      model = @loadDay day
      @transitionTo 'day', model

    showEvent: (event) ->
      Em.Logger.error 'DayRoute#showEvent says: "You still need to implement this"'
      # @set 'selectedEvent', event
      @transitionTo 'event', event
