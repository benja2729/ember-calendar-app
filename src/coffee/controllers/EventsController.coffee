
define ['ember', 'ValpoUtils', 'App'], (Em, VU, App) ->

  EventsController = Em.ArrayController.extend
    needs: ['filters']
    isFiltering: false
    filteredEvents: Em.computed( (property, value) ->
      @send 'willFilterEvents'
      content = @get 'content'

      events = if value? then value
      else
        filters = @get 'controllers.filters'
        content.filter filters.matchEvent, filters

      @send 'didFilterEvents'
      events
    ).property 'isFiltering'

    reloadEvents: (range) ->
      model = App.Event.find range

      model.one 'didLoad', =>
        @send 'filterEvents'

      @set 'model', model

    filterEvents: -> @toggleProperty 'isFiltering'

    willFilterEvents: -> this

    didFilterEvents: () ->
      @toggleProperty 'isFiltering'
      @send 'reloadState'    # Updates the url

  App.EventsController = EventsController
