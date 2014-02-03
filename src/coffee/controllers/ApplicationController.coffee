
appHeaderPath = (slug) ->
  Em.computed 'currentDay', (key, value) ->
    if value? then value
    else
      format = @container.lookup("route:#{slug}").get('format')
      currentDay = @get('currentDay')
      moment(currentDay).format format

App.ApplicationController = Em.Controller.extend App.DataUtilMixin,
  needs: ['filters']
  filtersBinding: 'controllers.filters'
  # allCategories: Em.A()
  # allCategoriesBinding: 'filters.allCategories'
  activeCategoriesBinding: 'filters.categories'
  defaultResource: 'day'
  filtersAreOpen: false
  lastResource: null
  currentResource: null
  lastPath: null
  dayPath: appHeaderPath 'day'
  monthPath: appHeaderPath 'month'
  currentController: Em.computed 'currentResource', -> @controllerFor @get('currentResource')
  iCalEventsCache: Em.computed 'currentController.content', 'filters.categories', ->
    controller = @get 'currentController'
    result = controller.get 'filteredEvents'
    result = if result is undefined and App.Event.detectInstance(content = controller.get 'content') then Em.A [content] else result
    result or Em.A()

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
