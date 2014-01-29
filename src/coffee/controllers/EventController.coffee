
App.EventController = Em.ObjectController.extend
  needs: ['day', 'filters']
  dayBinding: 'controllers.day'
  filtersBinding: 'controllers.filters'

  currentDayBinding: 'start'
  isCurrentDay: Em.computed 'currentDay', 'day.currentDay', ->
    eCurrentDay = @get 'currentDay'
    dCurrentDay = @get 'day.currentDay'
    range = moment(dCurrentDay).twix eCurrentDay
    range.isValid() and range.isSame('day')
  dayRoutePath: Em.computed 'isCurrentDay', ->
    format = @container.lookup('route:day').get 'format'
    moment(@get('day.currentDay') or @get('currentDay')).format format
