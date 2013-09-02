
require 'models/Event'
require 'controllers/EventsController'
require 'controllers/EventsIndexController'
require 'views/EventsDateRangePickerView'
require 'views/EventsView'
require 'views/EventsListView'

get = Em.get
set = Em.set

format = 'MM-DD-YYYY'

App.EventsRoute = Em.Route.extend
  serialize: (model, params) ->
    ret = {}

    if model.get('length') < 1
      m = moment()
      ret['start'] = m.startOf('day').format format
      ret['end'] = m.endOf('day').format format
    else
      for key in params
        ret[key] = switch key
          when 'start'
            moment.unix(model.get('firstObject.start')).format format
          when 'end'
            moment.unix(model.get('lastObject.end')).format format
    ret

  model: (params) ->
    # range =
    #   start: moment(params.start, format).unix()
    #   end: moment(params.end, format).unix()
    # App.Event.find range
    filters = @modelFor 'application'
    range = if filters? then {start: get(filters, 'start'), end: get(filters, 'end')}
    else {start: moment().startOf('day').unix(), end: moment().endOf('day').unix()}
    App.Event.find range

  # renderTemplate: (controller, model) ->
  #   @render 'events', {
  #     into: 'application'
  #     outlet: 'main'
  #     controller
  #   }

  #   @render 'events/date-range-picker', {
  #     into: 'application'
  #     outlet: 'dateRangePicker'
  #     controller
  #   }

  actions:
    showEventDetailPane: (context) ->
      @transitionTo 'event', context

App.EventsIndexRoute = Em.Route.extend
  model: -> @modelFor 'events'
