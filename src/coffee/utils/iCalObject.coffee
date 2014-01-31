
sanitize = (key) ->
  slug = "content.#{key}"
  Em.computed slug, ->
    value = @get slug
    value.replace /\n/g, '\\n'

utcTime = (key) ->
  Em.computed 'range', ->
    {
      range
      format
      isAllDay
    } = @getProperties 'range', 'format', 'isAllDay'
    # allDay events are prone to be a day off
    # might have to do with twix or utc or how it's formatted
    format = format.replace(/T.*$/, '') if isAllDay
    range[key].clone().utc().format format

iCalMixin = Em.Mixin.create
  todayBinding: 'App.today'
  format: 'YYYYMMDDTHHmmss[Z]'
  now: Em.computed 'today', -> @get('today').format @get('format')
  template: Em.required String
  toString: -> @get 'template'

VEvent = Em.ObjectProxy.extend iCalMixin,
  content: Em.required()
  title: sanitize 'title'
  description: sanitize 'description'
  location: sanitize 'location'
  dtStampBinding: 'now'
  dtStart: utcTime 'start'
  dtEnd: utcTime 'end'
  template: Em.computed ->
    {
      id
      title
      description
      location
      dtStamp
      dtStart
      dtEnd
    } = @getProperties 'id', 'title', 'description', 'location', 'dtStamp', 'dtStart', 'dtEnd'

    """
BEGIN:VEVENT
UID:#{id}
DTSTAMP:#{dtStamp}
DTSTART:#{dtStart}
DTEND:#{dtEnd}
SUMMARY:#{title}
DESCRIPTIONS:#{description}
LOCATION:#{location}
END:VEVENT

"""

App.iCalObject = Em.Object.extend iCalMixin,
  events: Em.required Array
  version: '2.0'
  mimeType: 'text/calendar;charset=utf8'
  toBlob: ->
    template = @get 'template'
    type = @get 'mimeType'
    try
      return new Blob [template], {type}
    catch e
      Em.Logger.error e.stack
      alert('It looks like your browser doesn\'t support that feature')
  vEvents: Em.computed 'events', ->
    events = @get 'events'
    events.map (event) ->
      VEvent.create content: event
  renderedEvents: Em.computed 'vEvents', ->
    vEvents = @get 'vEvents'
    output = vEvents.map (vEvent) -> vEvent.toString()
    output.join('')
  prodId: 'VUEventsCalendar'
  template: Em.computed 'renderedEvents', ->
    {
      version
      prodId
      renderedEvents
    } = @getProperties 'version', 'prodId', 'renderedEvents'

    """
BEGIN:VCALENDAR
VERSION:#{version}
PRODID:-//#{prodId}//NONSGML v1.0//EN
#{renderedEvents}
END:VCALENDAR
"""
