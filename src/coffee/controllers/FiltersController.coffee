
define ['ember', 'ValpoUtils', 'App', 'moment'], (Em, VU, App, moment) ->

  FiltersController = Em.ObjectController.extend
    needs: ['application', 'events']

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
