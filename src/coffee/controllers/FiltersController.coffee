
define ['ember', 'ValpoUtils', 'App', 'moment', 'models/Filters'], (Em, VU, App, moment) ->

  FiltersController = Em.ObjectController.extend
    needs: ['application', 'events']
    isReady: false   # Needed because would delegate binding to 'content' otherwise
    isReadyBinding: 'controllers.application.isReady'

    _filterPropertyObserver: Em.observer( (controller, property) ->
      @get('controllers.events').send 'filterEvents'
    , 'categories.mask')

    start: Em.computed( (property, value) ->
      ret = if value? then value    # Allows setting the value
      else @get('controllers.events.firstObject.start.unix')

      ret or moment().startOf('day').unix()
    ).property 'controllers.events.firstObject'

    end: Em.computed( (property, value) ->
      ret = if value? then value
      else @get('controllers.events.lastObject.end.unix')

      ret or moment().endOf('day').unix()
    ).property 'controllers.events.lastObject'

    # This function is passed into an `Array#filter` function
    # from App.EventsController
    matchEvent: (item, index, enumerable) ->
      categories = @get 'categories'

      # 0 is the key for the 'all' category
      if categories.get('mask') is 0 then return true
      for id in item.get('categories').mapProperty 'id'
        if categories.has(id) then return true
      false

    updateRange: ->
      params = @getProperties 'start', 'end'
      @get('controllers.events').send 'reloadEvents', params

    toggleCategory: (category) ->
      categories = @get 'categories'
      id = category.get 'id'
      @set 'categories', categories.toggle(id)

  App.FiltersController = FiltersController
