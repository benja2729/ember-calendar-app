
App.EventController = Em.ObjectController.extend
  needs: ['day', 'filters']
  dayBinding: 'controllers.day'
  filtersBinding: 'controllers.filters'
  filtersHaveCategories: Em.computed 'filters.categories.[]', ->
    categories = @get 'filters.categories'
    categories isnt undefined
  currentDayBinding: 'start'
  isCurrentDay: Em.computed 'currentDay', 'day.currentDay', ->
    eCurrentDay = @get 'currentDay'
    dCurrentDay = @get 'day.currentDay'
    range = moment(dCurrentDay).twix eCurrentDay
    range.isValid() and range.isSame('day')
  actions:
    selectCategory: (category) ->
      filters = @get 'filters'
      categories = filters.get 'categories'
      if categories isnt undefined
        categories.clear().addObject category
      currentDay = @get 'currentDay'
      @send 'loadDay', currentDay
    loadDay: (currentDay) ->
      isCurrentDay = @get 'isCurrentDay'
      dayRouter = @container.lookup 'route:day'
      currentDay ?= @get('day.currentDay') or @get('currentDay')

      model = undefined
      if not isCurrentDay
        model = dayRouter.loadDay(dayRouter.getRange currentDay)
      @send 'loadState', 'day', model
