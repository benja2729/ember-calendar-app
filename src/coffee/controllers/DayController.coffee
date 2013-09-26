
testCategories = (categoryIds, event) ->
  result = false
  categories = event.get 'categories'

  categories.forEach (category) ->
    id = category.get 'id'
    test = categoryIds.contains(id)
    if test then result = true
    
  result

filterContent = (content, filters) ->
  categoryIds = filters.get 'categories'
  if categoryIds.get('length') is 0 then return content
  ret = Em.A()

  content.forEach (event) ->
    hasCategories = testCategories categoryIds, event
    if hasCategories
      ret.addObject event

  ret

App.DayController = Em.ArrayController.extend
  needs: ['filters']
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
  hasAllDayEvents: Em.computed.empty 'allDayEvents.length'

  featuredEvents: Em.computed.filterBy 'arrangedContent', 'isFeatured', true

  filteredEvents: Em.computed 'arrangedContent.@each', ->
    arrangedContent = @get 'arrangedContent'
    filters = @get 'controllers.filters'
    filterContent arrangedContent, filters
