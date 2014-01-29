
require 'controllers/EventsFilterController'

App.MonthController = App.EventsFilterController.extend App.CalendarMonthMixin,
  currentMonthBinding: 'currentDay'
  route: Em.computed -> @container.lookup 'route:month'
  nextMonthFormat: Em.computed 'nextMonth', ->
    route = @get 'route'
    nextMonth = @get 'nextMonth'
    nextMonth.format route.get('format')
  lastMonthFormat: Em.computed 'lastMonth', ->
    route = @get 'route'
    lastMonth = @get 'lastMonth'
    lastMonth.format route.get('format')

  # Hook called from within App.EventsFilterMixin#filteredEvents
  eventFilterMatch: (event, match, list, filters) ->
    {
      range
      featuredRange
    } = event.getProperties 'range', 'featuredRange'
    dayMap = @get 'eventsForDayMap'

    if featuredRange and featuredRange.overlaps(range) then range = featuredRange.union(range)
    iter = range.iterate 'days'

    while iter.hasNext()
      next = iter.next()
      index = next.format('YYYYMMDD')
      day = dayMap[index]
      dayMap[index] = day = Em.A() unless Em.isArray(day)
      day.addObject event

    event

  eventsForDayMap: Em.computed (key, value) ->
    if value? then value
    else Em.Object.create()
  eventsForDay: (date) ->
    # content = @get 'filteredEvents'
    # range = @getRange 'day', date
    # data = content.filter (event) ->
    #   featuredRange = event.get 'featuredRange'
    #   range.overlaps(event.get 'range') or (featuredRange and featuredRange.overlaps range)
    # Em.ArrayProxy.create
    #   content: data
    #   currentDay: date
    dayMap = @get 'eventsForDayMap'
    content = dayMap[date.format('YYYYMMDD')]
    Em.ArrayProxy.create
      content: if content? then content else Em.A()
      currentDay: date

  customDayFn: (dayObject) ->
    date = dayObject.get('date')
    data = if date? then @eventsForDay date
    else undefined
    data = undefined if data?.length is 0
    dayObject.set 'data', data

  weeks: Em.computed 'range', 'filteredEvents.@each', ->
    @get 'filteredEvents'   # seed the processing of filteredEvents.... I guess
    @_super.apply this, arguments

  # Not used, and computed listeners need not be called
  featuredEvents: Em.K
  eventsList: Em.K
  allDayEvents: Em.K
