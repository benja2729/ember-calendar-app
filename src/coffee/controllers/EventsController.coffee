
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
    ).property 'isFiltering', 'content'

    filterEvents: -> @toggleProperty 'isFiltering'

    willFilterEvents: Em.K

    didFilterEvents: () ->
      @toggleProperty 'isFiltering'

  App.EventsController = EventsController
