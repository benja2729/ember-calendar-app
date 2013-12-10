
filterContent = (content, filters) ->
  return content if Em.get(content, 'length') is 0
  categoryIds = filters.get 'categories'
  hasAllCategories = Em.get(categoryIds, 'length') is 0
  ret = Em.A()

  content.forEach (event) ->
    {isAllDay, categories} = event.getProperties 'isAllDay', 'categories'
    if isAllDay then return

    hasCategories = hasAllCategories or Em.EnumerableUtils.hasCommon categories, categoryIds, (obj, id) ->
      obj.get('id') is id

    if hasCategories
      ret.addObject event

  ret

App.DayController = Em.ArrayController.extend
  needs: ['application', 'filters']
  filtersAreOpenBinding: 'controllers.application.filtersAreOpen'
  sortProperties: ['start']
  sortAscending: true
  sortFunction: (a, b) -> +a - +b

  # This should probably be managed by the Router
  currentDay: Em.computed (key, value) ->
    if value? then value
    else 
      start = @get 'arrangedContent.firstObject.start'
      today = @get 'today'
      start or today
  # _currentDayObserver: Em.observer( ->
  #   currentDay = @get 'currentDay'
  #   @send 'transitionToDay', currentDay
  # , 'currentDay')

  allDayEvents: Em.computed.filterBy 'arrangedContent', 'isAllDay', true
  hasAllDayEvents: Em.computed 'allDayEvents.length', -> @get('allDayEvents.length') isnt 0

  featuredEvents: Em.computed.filterBy 'arrangedContent', 'isFeatured', true

  filteredEvents: Em.computed 'arrangedContent.@each', ->
    arrangedContent = @get 'arrangedContent'
    filters = @get 'controllers.filters'
    filterContent arrangedContent, filters

  # actions:
  #   showEvent: (event) ->
  #     Em.Logger.error 'DayRoute#showEvent says: "You still need to implement this"'
  #     @set 'selectedEvent', event
