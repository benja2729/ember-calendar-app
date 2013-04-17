
define ['App', 'ember', 'moment'], (App, Em, moment) ->

  closest = (callback, target) ->
    console.groupCollapsed 'EventList.search'
    console.time 'EventsModel.closest - time'

    stop = 0
    min = 0
    max = @length - 1

    while 0 <= min <= max

      # Make sure that this function doesn't stall a page
      Em.assert 'EventsModel.closest has timed-out', ++stop < 50
      length = max - min + 1
      mid = Math.floor length / 2
      item = @objectAt mid
      term = callback.call target, item, mid, this

      console.groupCollapsed "Group #{stop}"
      console.log """
        Range: #{min} - #{max}
        mid: #{mid}
        length: #{length}
        term: #{term}
      """
      console.log "item: ", item
      console.groupEnd "Group #{stop}"       

      if length < 4
        if term > 0 then min++
        else max--

      else
        if term > 0 then min = mid
        else max = mid

    console.timeEnd 'EventsModel.closest - time'
    console.groupEnd 'EventList.search'
    item

  indexOf = (key, time) ->
    index = 0
    closest.call this, (item, idx) ->
      index = idx
      console.log item[key]
      time - moment(item.get('data.attributes.start')).unix()
    index
  
  Controller = Em.ArrayController.extend
    init: ->
      @_super()
      window.MonthController = this

    currentDate: null     # When set should be a moment object

    daysInMonth: Em.computed( ->
      @get('currentDate').daysInMonth()
    ).property 'currentDate'

    startDate: Em.computed( ->
      @get('currentDate').clone().startOf 'month'
    ).property 'currentDate'

    endDate: Em.computed( ->
      end = @get('startDate').clone()
      end.add 'days', @get('daysInMonth') - 1
      end.endOf 'day'
    ).property 'startDate', 'daysInMonth'

    eventsInMonth: Em.computed( ->
      start = @get('startDate').unix()
      end = @get('endDate').unix()
      content = @get 'content.content'

      Em.A(content.slice indexOf.call(content, 'start', start), indexOf.call(content, 'end', end))
    ).property 'content'

    tiles: Em.computed( ->
      tiles = Em.A []
    ).property()

    addMonths: (number = 1) ->
      current = @get 'currentDate'
      newDate = current.add 'months', number
      @set 'currentDate', newDate

  App.MonthController = Controller
