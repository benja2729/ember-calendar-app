
App.ApplicationController = Em.Controller.extend
  needs: ['filters']
  activeCategoriesBinding: 'controllers.filters.categories'
  defaultResource: 'day'
  filtersAreOpen: false
  lastResource: null
  currentResource: null
  lastPath: null

  _routeChangeObserver: Em.beforeObserver( (controller, property) ->
    @set 'lastResource', @get(property)
    # console.log @get(property)
  , 'currentResource')

  _pathChangeObserver: Em.beforeObserver( (controller, property) ->
    @set 'lastPath', @get(property)
    # console.log @get(property)
  , 'currentPath')

  # For dev purposes only
  # _propertyChangeObserver: Em.observer( (controller, property) ->
  #   console.log "- Property #{property} has changed to #{@get(property)}"
  # , 'lastPath', 'lastResource', 'currentPath', 'currentResource')
