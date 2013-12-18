
App.RangePagerComponent = Em.Component.extend
  range: Em.required String
  isMobileBinding: 'App.isMobile'
  format: 'MMMM'
  shortFormat: Em.computed.defaultTo 'format'
  _format: Em.computed 'isMobile', ->
    if @get('isMobile') then @get('shortFormat')
    else @get('format')
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
    changeDate: (date) -> @set 'date', date