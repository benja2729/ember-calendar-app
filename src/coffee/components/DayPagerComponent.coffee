
require 'components/PagerItemComponent'

App.DayPagerComponent = Em.Component.extend
  range: Em.required String
  format: 'ddd, MMM Do'
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
      @sendAction 'action', date