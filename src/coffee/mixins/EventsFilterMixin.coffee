
App.EventsFilterMixin = Em.Mixin.create
  filters: Em.required()
  arrangedContent: Em.required()
  currentDay: Em.required()
  currentDayRange: Em.computed 'currentDay', ->
    currentDay = moment(@get 'currentDay').clone().startOf('day')
    currentDay.twix(currentDay.clone().endOf 'day')
  promotedIsCurrentDay: (event) ->
    currentDayRange = @get 'currentDayRange'
    {
      range
      featuredRange
    } = event.getProperties 'range', 'featuredRange'
    return false unless featuredRange
    currentDayRange.overlaps range

  # A hook to make alterations to the event given the context
  # Must return the event to be included in filteredEvents
  #      return a falsy value to exclude from filtered set
  eventFilterMatch: (event, match, list, filters) -> event

  featuredEvents: Em.computed.filterBy 'arrangedContent', 'isFeatured', true

  useExclusiveSearch: false
  useExclusiveSearchBinding: 'App.useExclusiveSearch'
  filteredEvents: Em.computed 'arrangedContent.@each', 'filters.categories.@each', 'useExclusivSearch', ->
    content = @get 'arrangedContent'
    filters = @get 'filters'
    useExclusiveSearch = @get 'useExclusiveSearch'
    categoryCache = filters.get 'categories'
    hasAllCategories = Em.get(categoryCache, 'length') is 0

    return content if Em.get(content, 'length') is 0

    ret = Em.A()
    content.forEach (event) =>
      categories = event.get 'categories'

      hasCategories = hasAllCategories or if useExclusiveSearch
        # Exclusive search
        # more categories means more specific
        commonCategories = Em.EnumerableUtils.common categories, categoryCache, (cat1, cat2) ->
          Em.get(cat1, 'id') is Em.get(cat2, 'id')
        commonCategories.get('length') is categoryCache.get('length')
      else

        # Inclusive search
        # more categories means more events
        Em.EnumerableUtils.hasCommon categories, categoryCache, (cat1, cat2) ->
          Em.get(cat1, 'id') is Em.get(cat2, 'id')

      filterMatch = hasCategories     # and hasTags and hasWhatever...

      event = @eventFilterMatch event, filterMatch, content, filters
      if filterMatch and event?
        ret.addObject event

    ret

  eventsList: Em.computed 'filteredEvents.@each', ->
    currentDayRange = @get 'currentDayRange'
    filteredEvents = @get 'filteredEvents'

    filteredEvents.filter (event) =>
      {
        isAllDay
        featuredRange
      } = event.getProperties 'isAllDay', 'featuredRange'

      return false if isAllDay    # Don't accept any all-day events
      if featuredRange
        return false unless @promotedIsCurrentDay(event)
      true

  allDayEvents: Em.computed 'filteredEvents.@each', (event) ->
    currentDayRange = @get 'currentDayRange'
    filteredEvents = @get 'filteredEvents'

    filteredEvents.filter (event) =>
      {
        isAllDay
        featuredRange
        range
        start
        isMultiDay
      } = event.getProperties 'isAllDay', 'categories', 'featuredRange', 'range', 'start', 'isMultiDay'

      return false unless isAllDay    # Accept only all-day events
      if featuredRange
        return false unless @promotedIsCurrentDay(event)
      true
