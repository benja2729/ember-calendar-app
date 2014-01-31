
App.iCalMixin = Em.Mixin.create
  todayBinding: 'App.today'
  format: 'YYYYMMDD[T]HHmmss[Z]'
  now: Em.computed 'today', -> @get('today').format @get('format')
  template: Em.required String
  toString: -> @get 'template'
  formatDate: (event, key) ->
    format = @get 'format'
    {
      range
      isAllDay
    } = event.getProperties 'range', 'isAllDay'
    date = range[key].clone()
    if isAllDay
      # all-day events are defined by being set one day apart
      # in effect, add one day to the end date of an event
      # Also, all-day events are not affected by time-zones
      date.add 'day', 1 if key is 'end'
      format = format.replace /\[T.*$/, ''
    else date.utc()
    date.format format
