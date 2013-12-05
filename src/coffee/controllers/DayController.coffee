
testCategories = (categoryIds, event) ->
  result = false
  if Em.get(categoryIds, 'length') is 0 then return true
  categories = event.get 'categories'

  categories.forEach (category) ->
    id = category.get 'id'
    test = categoryIds.contains(id)
    if test then result = true
    
  result

filterContent = (content, filters) ->
  categoryIds = filters.get 'categories'
  ret = Em.A()

  content.forEach (event) ->
    hasCategories = testCategories categoryIds, event
    isAllDay = event.get('isAllDay')
    if hasCategories and hasCategories and not isAllDay
      ret.addObject event

  ret

App.DayController = Em.ArrayController.extend
  needs: ['application', 'filters']
  filtersAreOpenBinding: 'controllers.application.filtersAreOpen'
  sortProperties: ['start']
  sortAscending: true
  sortFunction: (a, b) -> +a - +b

  currentDay: Em.computed (key, value) ->
    if value? then value
    else 
      start = @get 'arrangedContent.firstObject.start'
      today = @get 'today'
      start or today
  _currentDayObserver: Em.observer( ->
    currentDay = @get 'currentDay'
    @send 'transitionToDay', currentDay
  , 'currentDay')

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
