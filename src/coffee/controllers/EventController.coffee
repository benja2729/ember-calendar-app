
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
  actions:
    loadDay: ->
      isCurrentDay = @get 'isCurrentDay'
      dayRouter = @get('day.target.router').getHandler('day')
      currentDay = @get('day.currentDay') or @get('currentDay')

      if not isCurrentDay
        model = dayRouter.loadDay(dayRouter.getRange currentDay)
        @send 'loadState', 'day', model
      else @send 'loadState', 'day'
