
require 'models/Event'

filterEvents = ->
  filters = @get 'controllers.filters'

  if not filters.get('isReady') then return

  Em.Logger.debug '-- EventsController#filterEvents: filtering content'
  content = @get 'content'
  events = content.filter filters.matchEvent, filters

  @set 'filteredEvents', events

App.EventsController = Em.ArrayController.extend
  init: ->
    @addObserver 'filteredEvents', this, ->
      @send 'reloadState'    # Updates the url with current model
    @_super.call this, arguments

  sortAscending: true
  sortProperties: ['start']

  needs: ['application']
  # displayModes: ['day', 'week', 'month']
  # activeDisplayMode: 1    # Set to display events by week by default
  filteredEvents: Em.A([])

  updateRange: (start, end) ->
    range =
      start: start.unix()
      end: end.unix()
    model = App.Event.find range
    model.one 'didLoad', =>
      console.log this
      @send 'reloadState', model

  start: Em.computed 'arrangedContent.firstObject.start', (key, value) ->
    if value? then value
    else @get 'arrangedContent.firstObject.start'
  end: Em.computed 'arrangedContent.lastObject.end', (key, value) ->
    if value? then value
    else @get 'arrangedContent.lastObject.end'
  actions:
    reloadEvents: ->
      filters = @get 'controllers.filters'
      range = filters.getProperties 'start', 'end'
      model = App.Event.find range
      model.one 'didLoad', =>
        @set 'model', model

    # Doubles as both an event and an observer
    # Might not be the best implementation
    filterEvents: Em.observer filterEvents, 'content', 'controllers.filters.isReady'
