
App.DayController = Em.ArrayController.extend
  needs: ['application', 'filters']
  filtersBinding: 'controllers.filters'
  filtersAreOpenBinding: 'controllers.application.filtersAreOpen'
  sortProperties: ['start']
  sortAscending: true
  sortFunction: (a, b) -> +a - +b

  featuredEvents: Em.computed.filterBy 'arrangedContent', 'isFeatured', true
  filteredEvents: Em.computed 'arrangedContent.@each', 'filters.categories.@each', ->
    content = @get 'arrangedContent'
    filters = @get 'filters'
    # filterContent.call this, arrangedContent, filters
    return content if Em.get(content, 'length') is 0

    categoryCache = filters.get 'categories'
    hasAllCategories = Em.get(categoryCache, 'length') is 0
    currentDay = moment(@get 'currentDay').clone().startOf('day')
    currentRange = currentDay.twix(currentDay.clone().endOf 'day')
    ret = Em.A()

    content.forEach (event) =>
      {
        isAllDay,
        categories,
        featuredRange,
        range,
        start,
        isMultiDay
      } = event.getProperties 'isAllDay', 'categories', 'featuredRange', 'range', 'start', 'isMultiDay'

      # if isAllDay then return # Don't include all day events in the events list
      if !!featuredRange and (  # Is it showing up because it's promoted? If so...
        not currentRange.contains(start) or
        (isMultiDay and not range.contains(currentDay))
        ) then return
        # not currentRange.contains(start) then return

      hasCategories = hasAllCategories or Em.EnumerableUtils.hasCommon categories, categoryCache, (cat1, cat2) ->
        Em.get(cat1, 'id') is Em.get(cat2, 'id')

      if hasCategories
        ret.addObject event

    ret

  eventsList: Em.computed.filterBy 'filteredEvents', 'isAllDay', false
  allDayEvents: Em.computed.filterBy 'filteredEvents', 'isAllDay', true
