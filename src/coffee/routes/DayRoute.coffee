
require 'models/Event'
require 'controllers/DayController'
require 'views/DayView'

App.DayRoute = Em.Route.extend
  format: 'MM-DD-YYYY'
  today: moment().startOf('day')
  beforeModel: (transition) ->
    # console.log 'Day#beforeModel'
    # console.log transition
  model: (params) ->
    params.day ?= 'today'
    day = @getRange if params.day is 'today' then new Date()
    else params.day

    @loadDay day

  serialize: (model, params) ->
    format = @get 'format'
    ret = {}
    meta = @metaForType 'event'
    today = @get 'today'
    currentDay = moment(meta.start)

    ret['day'] = if currentDay.diff(today, 'day') is 0 then 'today'
    else currentDay.format format
    ret

  setupController: (controller, model) ->
    # currentDay = model.findBy('isMultiDay', false).get('start')
    meta = @metaForType('event')

    controller.setProperties
      model: model
      today: @get('today')
      currentDay: moment(meta.start)

  getRange: (input) ->
    format = @get 'format'
    m = if typeof input is 'string' then moment input, format
    else moment input
    m.clone().startOf('day').twix(m.endOf 'day')

  loadDay: (range) ->
    meta = @metaForType 'event'
    currentModel = @get 'currentModel'
    if range.contains(meta.start) and
      range.contains(meta.end) and
      currentModel then currentModel

    fetchRange =
      start: range.start.unix()
      end: range.end.unix()
    store = @get 'store'
    store.findQuery 'event', fetchRange

  actions:
    transitionToDay: (input) ->
      day = @getRange input
      model = @loadDay day
      @transitionTo 'day', model
      # @send 'loadState', 'day', model
