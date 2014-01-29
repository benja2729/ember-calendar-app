
require 'components/RangePagerComponent'

App.DatePickerComponent = Em.Component.extend App.CalendarMonthMixin,
  # _setInitialMonth: ( ->
  #   @set 'currentMonth', @get('activeDate')
  # ).on('init')
  classNames: ['date-picker']

  currentMonth: Em.computed 'activeDate', (key, value) ->
    if value then value else @get('activeDate')
  activeDate: null
  monthFormat: 'MMMM YYYY'

  currentMonthName: Em.computed 'currentMonth', 'monthFormat', ->
    currentMonth = @get 'currentMonth'
    format = @get 'monthFormat'
    currentMonth.format format

  actions:
    #select an active day (typically called by action in template)
    selectDate: (day) ->
      @set 'activeDate', day
      @sendAction 'action', day

    
    #change the currentMonth being displayed
    #change current month by provided +/- integer
    changeMonth: (newMonth) -> @set 'currentMonth', newMonth
