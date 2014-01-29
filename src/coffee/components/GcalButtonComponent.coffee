
App.GcalButtonComponent = Em.Component.extend
  classNames: ['gcal-button']
  tagName: 'span'

  event: Em.required()

  # "Static" component attributes
  imgUrl: '//www.google.com/calendar/images/ext/gc_button1.gif'
  hrefPrefix: 'http://www.google.com/calendar/event?'
  sprop: Em.computed -> "name:" + window.location.href
  trp: false    # availability=available
  action: 'TEMPLATE'

  # "Dynamic" component attributes
  textBinding: 'event.title'
  dates: Em.computed 'event.start', 'event.end', 'event.isAllDay', ->
    format = "YYYYMMDDTHHmmss[Z]"
    isAllDay = @get 'event.isAllDay'
    format = format.replace(/T.*$/, '') if isAllDay
    start = moment.utc(@get 'event.start').format(format)
    end = moment.utc(@get 'event.end').format(format)
    "#{start}/#{end}"
  detailsBinding: 'event.description'
  locationBinding: 'event.location'
  # guests: # add=<>&add=...
  # sprop: website name

  params: Em.computed 'text', 'dates', 'details', 'location', ->
    @getProperties 'action', 'text', 'dates', 'details', 'location', 'sprop', 'trp'
  href: Em.computed 'params', ->
    params = @get 'params'
    prefix = @get 'hrefPrefix'
    prefix + $.param(params)

