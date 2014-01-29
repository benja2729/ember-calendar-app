
require 'controllers/EventsFilterController'

App.DayController = App.EventsFilterController.extend
  monthRoutePath: Em.computed 'currentDay', ->
    currentDay = @get 'currentDay'
    format = @container.lookup('route:month').get 'format'
    moment(currentDay).format format
