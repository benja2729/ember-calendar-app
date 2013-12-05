
require 'components/RangePagerComponent'

App.DatePickerComponent = Em.Component.extend
  classNames: ['date-picker']
  tile: Em.View.extend Em.ViewTargetActionSupport,
    tagName: 'td'
    classNames: ['calendar-tile']
    classNameBindings: ['isActive:active', 'isToday']
    todayBinding: 'parentView.today'
    activeDateBinding: 'parentView.activeDate'
    formatBinding: 'parentView.tileFormat'
    date: Em.required 'moment'
    isToday: Em.computed 'today', 'date', -> 
      today = @get 'today'
      date = @get 'date'
      date.isSame today, 'day'
    isActive: Em.computed 'activeDate', 'date', ->
      activeDate = @get 'activeDate'
      date = @get 'date'
      date.isSame activeDate, 'day'
    action: 'selectDate'
    actionContext: Em.computed.alias 'date'
    click: -> @triggerAction()

  today: moment()
  currentMonth: moment()
  activeDate: null
  monthFormat: 'MMMM YYYY'
  dayFormat: 'ddd'
  tileFormat: 'DD'

  currentMonthName: Em.computed 'currentMonth', 'monthFormat', ->
    currentMonth = @get 'currentMonth'
    format = @get 'monthFormat'
    currentMonth.format format
  
  dayNames: Em.computed 'dayFormat', ->
    days = Em.A()
    format = @get 'dayFormat'
    week = @get('today').clone().startOf 'week'
    range = week.twix week.clone().endOf('week')
    iter = range.iterate 'days'

    while iter.hasNext()
      next = iter.next()
      days.pushObject next.format(format)
    days

  range: Em.computed 'currentMonth', ->
    moment = @get 'currentMonth'
    firstDay = moment.clone().startOf "month"
    lastDay = moment.clone().endOf "month"
    firstDay.twix lastDay, true

  weeks: Em.computed 'range', ->
    weeks = Em.A()
    range = @get 'range'
    weekIter = range.iterate 'weeks'

    while weekIter.hasNext()
      nextWeek = weekIter.next()
      weekRange = nextWeek.twix nextWeek.clone().endOf('week')
      dayIter = weekRange.iterate 'days'
      weekArray = Em.A()

      while dayIter.hasNext()
        nextDay = dayIter.next()
        weekArray.pushObject if range.contains(nextDay)
          nextDay
        else null
      weeks.pushObject weekArray
    weeks

  actions:
    #select an active day (typically called by action in template)
    selectDate: (day) ->
      @set 'activeDate', day

    
    #change the currentMonth being displayed
    #change current month by provided +/- integer
    changeMonth: (newMonth) -> @set 'currentMonth', newMonth
