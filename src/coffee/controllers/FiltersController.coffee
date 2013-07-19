
define ['ember', 'ValpoUtils', 'App'], (Em, VU, App) ->

  FiltersController = Em.ObjectController.extend
    needs: ['application', 'events']

    start: Em.computed( (property, value) ->
      if value? then value
      else @get('controllers.events.firstObject.start.unix')
    ).property 'controllers.events.firstObject'

    end: Em.computed( (property, value) ->
      if value? then value
      else @get('controllers.events.lastObject.end.unix')
    ).property 'controllers.events.lastObject'

    updateFilters: ->
      params = @getProperties 'start', 'end'
      model = App.Event.find params

      model.one 'didLoad', =>
        @transitionToRoute 'events', model

    toggleCategory: (category) ->
      categories = @get 'categories'
      id = category.get 'id'
      @set 'categories', categories.toggle(id)

  App.FiltersController = FiltersController
