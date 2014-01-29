
require 'models/Category'
require 'controllers/ApplicationController'
require 'views/ApplicationView'

App.ApplicationRoute = Em.Route.extend
  model: ->

    # Manually generate the Filters controller.
    # Why? Because f##k you
    filtersRoute = @container.lookup 'route:filters'
    filtersModel = filtersRoute.model filters: 'all'
    filtersController = filtersRoute.generateController 'filters', filtersModel
    filtersRoute.controller = filtersController
    filtersRoute.setupController filtersController, filtersModel
    @container.register 'route:filters', filtersRoute

    # The ApplicationRoute is the top-most route in the route hierarchy,
    # and its model hook gets called once when the app starts up.
    
    store = @get 'store'
    # store.push 'event',
    #   'id': '2729'
    #   'start': moment().startOf('day').format()
    #   'end': moment().add('day', 2).endOf('day').format()
    #   'location': 'IMC'
    #   'is_all_day': 'false'
    #   'isAllDay': 'true'
    #   'title': 'Test Record'
    #   'description': '''
    #     Test Description!

    #     Let's see what Showdown can do.

    #     Auto-parsed link: http://www.valpo.edu

    #     Auto-parsed link: http://www.valpo.edu with text after

    #     HTML link: <a href="http://www.valpo.edu">Valpo</a>

    #     MarkDown link: [Valpo](http://www.valpo.edu)
    #   '''
    #   'url': 'http://www.valpo.edu'
    #   'categories': [11]
    # store.push 'event',
    #   'id': '2830'
    #   'start': moment().startOf('day').format()
    #   'end': moment().endOf('day').format()
    #   'location': 'IMC'
    #   'is_all_day': false
    #   'title': 'Test Record'
    #   'description': '''
    #     Test Description!

    #     Let's see what Showdown can do.

    #     Auto-parsed link: http://www.valpo.edu

    #     Auto-parsed link: http://www.valpo.edu with text after

    #     HTML link: <a href="http://www.valpo.edu">Valpo</a>

    #     MarkDown link: [Valpo](http://www.valpo.edu)
    #   '''
    #   'url': 'http://www.valpo.edu'
    #   'categories': [11]
    store.find 'category'   # We will want all of the categories at runtime

  setupController: (controller, categories) ->
    controller.set 'allCategories', categories

  actions:
    transitionToEvent: (model) ->
      @transitionTo 'event', model
    loadState: (path, model) ->
      # console.log path
      model ?= @modelFor path
      if model? then @transitionTo path, model
      else @transitionTo path
    # reloadState: (model) ->
    #   path = @get 'controller.currentResource'
    #   @send 'loadState', path, model
    popAppState: ->
      path = @get 'controller.lastResource'
      @send 'loadState', path

    toggleFilterPane: (isOpen) ->
      controller = @controllerFor 'application'
      if isOpen? then controller.set 'filtersAreOpen', isOpen
      else controller.toggleProperty 'filtersAreOpen'
      controller.set 'filtersOpening', true
      $('.st-menu').one $.support.transition.end, ->
        controller.set 'filtersOpening', false

    updateCategories: (activeCategories) ->
      resource = @get 'controller.currentResource'
      resource = 'day' if resource is undefined or resource is 'event'

      resourceRoute = @container.lookup "route:#{resource}"
      resourceModel = resourceRoute.get 'currentModel'

      # Similate the filters model
      filters = Em.Object.create
        categories: activeCategories
      @transitionTo resource, filters, resourceModel

App.IndexRoute = Em.Route.extend
  redirect: -> @transitionTo 'day'
