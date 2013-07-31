
define ['ember', 'ValpoUtils', 'App'], (Em, VU, App) ->

  filterEvents = ->
    filters = @get 'controllers.filters'

    if not filters.get('isReady') then return

    Em.Logger.debug '-- EventsController#filterEvents: filtering content'
    content = @get 'content'
    events = content.filter filters.matchEvent, filters

    @set 'filteredEvents', events

  EventsController = Em.ArrayController.extend
    init: ->
      @addObserver 'filteredEvents', this, ->
        @send 'reloadState'    # Updates the url with current model
      @_super.call this, arguments

    needs: ['filters']
    displayModes: ['day', 'week', 'month']
    activeDisplayMode: 1    # Set to display events by week by default
    filteredEvents: Em.A([])

    reloadEvents: ->
      filters = @get 'controllers.filters'
      range = filters.getProperties 'start', 'end'
      model = App.Event.find range
      model.one 'didLoad', =>
        @set 'model', model

    # Doubles as both an event and an observer
    # Might not be the best implementation
    filterEvents: Em.observer filterEvents, 'content', 'controllers.filters.isReady'

  App.EventsController = EventsController
