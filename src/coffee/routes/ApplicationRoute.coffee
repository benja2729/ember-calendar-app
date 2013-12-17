
require 'models/Category'
require 'controllers/ApplicationController'
require 'views/ApplicationView'

Em.Route.reopen
  enter: ->
    # To add 'popAppState' funcitonality
    routeName = @get 'routeName'
    if /^\w+$/.test(routeName) and routeName isnt "loading" and routeName isnt 'application'
      @controllerFor('application').set 'currentResource', routeName
  metaForType: (type) ->
    store = @get 'store'
    model = store.modelFor(type)
    store.typeMapFor(model).metadata


App.ApplicationRoute = Em.Route.extend
  model: ->
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

    updateCategories: (activeCategories) ->
      # destinationRoute = @controllerFor('application').get 'currentResource'
      # destinationModel = @modelFor destinationRoute

      # model = @modelFor 'filters'
      # model = App.Filter.create() if model is undefined
      # model.set 'categories', activeCategories

      # console.log 'updateCategories', activeCategories

      # @transitionTo 'filters.' + destinationRoute , model, destinationModel
      @send 'loadState', 'day'

App.IndexRoute = Em.Route.extend
  redirect: -> @transitionTo 'day'
