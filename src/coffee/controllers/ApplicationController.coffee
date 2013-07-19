
define ['App', 'ember', 'ValpoUtils'], (App, Em, VU) ->

  ApplicationController = Em.Controller.extend
    categories: Em.A()

    lastRoute: null
    currentRoute: null
    lastPath: null

    _routeChangeObserver: Em.beforeObserver( (controller, property) ->
      @set 'lastRoute', @get(property)
      console.log @get(property)
    , 'currentRoute')

    _pathChangeObserver: Em.beforeObserver( (controller, property) ->
      @set 'lastPath', @get(property)
      console.log @get(property)
    , 'currentPath')

    # Fore dev purposes only
    _propertyChangeObserver: Em.observer( (controller, property) ->
      console.log "- Property #{property} has changed to #{@get(property)}"
    , 'lastPath', 'lastRoute', 'currentPath', 'currentRoute')

  App.ApplicationController = ApplicationController
