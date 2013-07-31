
define ['ember', 'ValpoUtils', 'App'], (Em, VU, App) ->

  EventsController = Em.ArrayController.extend
    needs: ['filters']
    displayModes: ['day', 'week', 'month']
    activeDisplayMode: 1    # Set to display events by week by default
    isFiltering: false
    filteredEvents: Em.computed( (property, value) ->
      console.log 'filtering content'
      filters = @get 'controllers.filters'

      events = if value? then value
      else
        if filters.get('isReady') then @filterEvents filters
        else @get('content')
      events
    ).property 'content'

    reloadEvents: (range) ->
      model = App.Event.find range
      model.one 'didLoad', =>
        @set 'model', model

    filterEvents: (filters) -> 
      content = @get 'content'
      events = content.filter filters.matchEvent, filters
      @set 'filteredEvents', events

    willFilterEvents: Em.beforeObserver( ->
      console.log 'willFilterEvents'
      @toggleProperty 'isFiltering'
    , 'filteredEvents')

    didFilterEvents: Em.observer( ->
      console.log 'didFilterEvents'
      @toggleProperty 'isFiltering'
      @send 'reloadState'    # Updates the url with current model
    , 'filteredEvents')

  App.EventsController = EventsController
