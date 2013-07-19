
define ['App', 'ember', 'ValpoUtils', 'moment'], (App, Em, VU, moment) ->

  # getEventsForDate = (date, events) ->
  #   result = events.filter (item) ->
  #     date is (new Date Em.get(item, 'start')).getDate()
  #   Em.A result

  createTile = (day, events, selected, filters) ->
    d = day.copy()
    date = d.get 'date'

    tile = VU.Tile.create
      _date: d
      content: Em.A()
      filters: filters
      # filtersBinding

    if tile.get('isInMonth')
      events.forEach (event) ->
        if date is (new Date Em.get(event, 'start')).getDate()
          tile.addObject event
    tile

  # createWeek = (day, events, selected) ->
  #   week = Em.A []
  #   for i in [0..6]
  #     week.addObject createTile(day, events, selected)
  #     day.change 1, 'days'
  #   week
  
  Controller = Em.ArrayController.extend VU.StatefulDate,
    init: ->
      @_super()
      window.MonthController = this

    filters: null

    format: 'MMMM, YYYY'
    _date: Em.computed( (key, value) ->
      if value?
        @set('filters.currentDate', value)
        value
      else @get('filters.currentDate')
    ).volatile().property 'filters.currentDate'

    startDate: Em.computed( ->
      @get('_date').copy().startOf('month')
    ).property '_date'

    endDate: Em.computed( ->
      @get('_date').copy().endOf('month')
    ).property '_date'

    daysInMonth: Em.computed( ->
      @get('filters.currentDate').get('daysInMonth')
    ).property 'filters.currentDate'

    # selectDay: (day) ->
    #   console.log 'MonthController#selectDay'
    #   @set '_date', day.get('_date')
    lastMonth: ->
      date = @get('_date').copy()
      date.change 'month', -1
      @set 'content', App.Event.find date.getRange('month', 'unix')
      @set '_date', date
    nextMonth: ->
      date = @get('_date').copy()
      date.change 'month', 1
      @set 'content', App.Event.find date.getRange('month', 'unix')
      @set '_date', date

    tiles: Em.computed( ->
      console.log 'MonthController#tiles'
      tiles = Em.A()
      # start = @get 'startDate'
      # end = @get 'endDate'
      filters = @get 'filters'
      {start, end} = filters.get 'range'
      # selected = @get('_date')
      selected = filters.get 'currentDate'
      date = start.get('date')
      day = start.copy().change 'day', -start.get('day')

      daysInMonth = @get 'daysInMonth'
      daysInView = date - 1 + daysInMonth
      daysInView += 7 - daysInView % 7

      console.log JSON.stringify({
        start
        end
        day
        daysInMonth
        daysInView
      })

      events = Em.A @get('content').slice()

      until tiles.get('length') >= daysInView / 7
        # tiles.addObject createWeek(day, events, selected)
        week = Em.A []
        for i in [0..6]
          week.addObject createTile(day, events, selected, filters)
          day.change 1, 'days'
        tiles.addObject week

      tiles
    ).property 'content'

    # lastMonth: -> @get('_date').change 'month', -1
    # nextMonth: -> @get('_date').change 'month', 1

  App.MonthController = Controller
