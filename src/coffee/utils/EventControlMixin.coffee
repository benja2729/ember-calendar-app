
App.EventControlMixin = Em.Mixin.create
  startDate: Em.computed 'content.start', -> moment @get('content.start')
  endDate: Em.computed 'content.end', -> moment @get('content.end')
  minDuration: Em.computed ->
    minutes = 6e4
    5 * minutes
  isMultiDay: Em.computed ->
    start = @get 'startDate'
    end = @get 'endDate'
    startDate = start.date()
    endDate = end.date()
    startDate isnt endDate
  isMinDuration: Em.computed ->
    start = @get 'startDate'
    end = @get 'endDate'
    diff = end.diff start
    minDiff = @get 'minDuration'
    # Show if the event is more than 5 minutes long
    diff > minDiff

  isFeatured: Em.computed.alias 'content.isFeatured'
