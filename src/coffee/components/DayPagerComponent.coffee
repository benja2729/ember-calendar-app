
require 'components/PagerItemComponent'

App.DayPagerComponent = Em.Component.extend
  range: Em.required String
  format: 'ddd, MMM Do'
  today: moment()
  isToday: Em.computed 'date', -> @get('today').date() is @get('date').date()
  date: Em.computed (key, value) ->
    if value? then moment value
    else undefined
  nextDate: Em.computed 'date', ->
    date = @get 'date'
    range = @get 'range'
    date.clone().add range, 1
  previousDate: Em.computed 'date', ->
    date = @get 'date'
    range = @get 'range'
    date.clone().subtract range, 1

  actions:
    sendTransition: (date) ->
      today = @get 'today'
      isToday = @get('isToday') and today.date() is date.date() 
      if not isToday then @sendAction 'action', date
      # @sendAction 'action', date