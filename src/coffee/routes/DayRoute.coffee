
require 'models/Event'
require 'controllers/DayController'
require 'views/DayView'

format = 'MM-DD-YYYY'
# today = new Date()

getRange = (input) ->
  m = if typeof input is 'string' then moment input, format
  else moment input
  {
    start: m.startOf('day').unix()
    end: m.endOf('day').unix()
  }

App.DayRoute = Em.Route.extend
  today: moment().startOf('day')
  beforeModel: (transition) ->
    # console.log 'Day#beforeModel'
    # console.log transition
  model: (params) ->
    params.day ?= 'today'
    day = getRange if params.day is 'today' then new Date()
    else params.day

    @loadDay day

  serialize: (model, params) ->
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

  loadDay: (range) ->
    store = @get 'store'
    twix = moment.unix(range.start).twix(moment.unix range.end)
    model = store.filter 'event', range, (item) ->
      range = item.get 'range'
      # console.log item.get('title'), range.simpleFormat('MMM DD h:mm'), twix.overlaps(range)
      twix.overlaps(range) or twix.engulfs(range)
    # store.findQuery 'event', range
    model.fail ->
      debugger
    model

  actions:
    loading: ->
      console.log 'in Day route'
    error: (reason) ->
      console.error reason.stack
    transitionToDay: (input) ->
      day = getRange input
      model = @loadDay day
      @transitionTo 'day', model

    showEvent: (event) ->
      Em.Logger.error 'DayRoute#showEvent says: "You still need to implement this"'
      # @set 'selectedEvent', event
      @transitionTo 'event', event
