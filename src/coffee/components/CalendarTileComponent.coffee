
App.CalendarTileComponent = Em.Component.extend App.EventsFilterMixin,
  tagName: 'td'
  classNames: ['calendar-tile']
  classNameBindings: ['isValid:valid-day:invalid-day']
  format: 'DD'
  formatPath: 'YYYY-MM-DD'

  date: Em.required 'moment'
  today: Em.required 'moment'
  data: null   # Actually not required, but an option
  showPromoted: false

  # EventsFilterMixin overrides
  filters: Em.required 'object'   # Provided as a parameter
  arrangedContentBinding: 'data'
  currentDayBinding: 'date'
  featuredEvents: null
  eventsList: Em.computed (key, value) -> if value? then value else Em.A()
  allDayEvents: null

  eventFilterMatch: (event, match, list, filters) ->
    if match    # Displayed events should match the current filters
      {
        featuredRange
        range
      } = event.getProperties 'featuredRange', 'range'
      events = @get 'eventsList'

      if featuredRange and not @get('showPromoted')
        events.addObject(event) if @promotedIsCurrentDay(event)
      else
        events.addObject event
    event

  limit: 5
  limitOffset: Em.computed 'events', 'eventsList', ->
    {
      events
      eventsList
    } = @getProperties 'events', 'eventsList'
    eventsList.get('length') - events.get('length')
  isAboveLimit: Em.computed 'limitOffset', ->
    offset = @get 'limitOffset'
    offset > 0
  moreText: Em.computed 'isAboveLimit', ->
    offset = @get 'limitOffset'
    base = "#{offset} More Event"

    if offset is 1 then base
    else base + 's'

  hasEvents: Em.computed 'filteredEvents', 'eventsList', ->
    {
      filteredEvents    # Not used but called to seed filtering
      eventsList
    } = @getProperties 'filteredEvents', 'eventsList'
    eventsList.get('length') > 0
  events: Em.computed 'filteredEvents', 'eventsList', 'limit', ->
    {
      data
      eventsList
      limit
      filteredEvents    # Not used but called to seed filtering
    } = @getProperties 'data', 'eventsList', 'limit', 'filteredEvents'
    return null unless data?
    eventsList.copy().splice 0, limit

  datePath: Em.computed 'date', 'data', ->
    {date, data} = @getProperties 'date', 'data'
    unless data then return moment(date).format @get('formatPath')

    unless Em.ArrayProxy.detectInstance(data)
      data = Em.ArrayProxy.create content: data
    data.set 'currentDay', moment(date)

  isValid: Em.computed.bool 'date'

  isToday: Em.computed 'date', 'today', ->
    today = @get 'today'
    unless today then return false
    date = @get 'date'
    moment(date).isSame today, 'day'
