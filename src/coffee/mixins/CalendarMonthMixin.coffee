
# May even need to be a component
DayObject = Em.Object.extend
  date: Em.required 'moment'
  dateFormat: Em.required String
  data: Em.required 'object'

App.CalendarMonthMixin = Em.Mixin.create App.DateUtilMixin,
  currentMonth: Em.required 'moment'
  todayBinding: 'App.today'
  dayObject: DayObject
  customDayFn: Em.K

  dayNameFormat: 'ddd'
  
  dayNames: Em.computed 'dayNameFormat', ->
    days = Em.A()
    format = @get 'dayNameFormat'
    week = @get('today').clone().startOf 'week'
    range = week.twix week.clone().endOf('week')
    iter = range.iterate 'days'

    while iter.hasNext()
      next = iter.next()
      days.pushObject next.format(format)
    days

  lastMonth: Em.computed 'currentMonth', -> @get('currentMonth').clone().subtract('month', 1)
  nextMonth: Em.computed 'currentMonth', -> @get('currentMonth').clone().add('month', 1)
  range: Em.computed 'currentMonth', ->
    month = @get 'currentMonth'
    @getRange 'month', month

  weeks: Em.computed 'range', ->
    weeks = Em.A()
    fn = @get 'customDayFn'
    range = @get 'range'
    weekIter = range.iterate 'weeks'
    dayObject = @get 'dayObject'

    while weekIter.hasNext()
      nextWeek = weekIter.next()
      weekRange = nextWeek.twix nextWeek.clone().endOf('week')
      dayIter = weekRange.iterate 'days'
      weekArray = Em.A()

      while dayIter.hasNext()
        nextDay = dayIter.next()
        newDay = dayObject.create()
        date = if range.contains(nextDay) then nextDay
        else null
        dateFormat = if date? then date.format('YYYY-MM-DD') else null
        newDay.setProperties {date, dateFormat}
        fn.call this, newDay
        weekArray.pushObject newDay
      weeks.pushObject weekArray
    weeks
