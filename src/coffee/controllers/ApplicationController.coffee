
App.ApplicationController = Em.Controller.extend
  needs: ['filters']
  activeCategoriesBinding: 'controllers.filters.categories'
  lastRoute: null
  currentRoute: null
  lastPath: null

  _routeChangeObserver: Em.beforeObserver( (controller, property) ->
    @set 'lastRoute', @get(property)
    # console.log @get(property)
  , 'currentRoute')

  _pathChangeObserver: Em.beforeObserver( (controller, property) ->
    @set 'lastPath', @get(property)
    # console.log @get(property)
  , 'currentPath')

  actions:
    updateCategories: (activeCategories) ->
      model = Em.Object.create
        categories: activeCategories
      @transitionToRoute 'filters', model

  # For dev purposes only
  # _propertyChangeObserver: Em.observer( (controller, property) ->
  #   console.log "- Property #{property} has changed to #{@get(property)}"
  # , 'lastPath', 'lastRoute', 'currentPath', 'currentRoute')
