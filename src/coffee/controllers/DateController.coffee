
define ['ember', 'ValpoUtils', 'App', './MonthController'], (Em, VU, App, MonthController) ->

  monthModel = (change) ->
    Em.computed( ->
      initDate = @get('_date').copy()
      initDate.change 'month', change
      events = App.Event.find
        start: initDate.copy().startOf('month').get 'unix'
        end: initDate.copy().endOf('month').get 'unix'
      events.reopen VU.StatefulDate,
        format: @get 'format'
        _date: initDate
    ).readOnly().volatile()

  DateController = MonthController.extend
    format: 'YYYY-MM-DD'
    selectedDate: null
    selectedEvents: null
    selectDay: (selected) ->
      # console.log selected
      @set 'selectedDate', selected.get('_date')
      @set 'selectedEvents', selected.get('content')

    nextMonth: monthModel 1
    lastMonth: monthModel -1

  App.DateController = DateController