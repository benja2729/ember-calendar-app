
require 'models/Category'
require 'controllers/ApplicationController'
require 'views/ApplicationView'

Em.Route.reopen
  enter: ->
    # To add 'popAppState' funcitonality
    routeName = @get 'routeName'
    # console.log "-----\nEntered #{routeName}\n-----"
    if /\.[^.]+$/.test routeName
      @controllerFor('application').set 'currentRoute', routeName

App.ApplicationRoute = Em.Route.extend
  model: ->
    # The ApplicationRoute is the top-most route in the route hierarchy,
    # and its model hook gets called once when the app starts up.
    store = @get 'store'
    store.push 'event',
      'id': '2729'
      'start': moment().startOf('day').format()
      'end': moment().endOf('day').format()
      'location': 'IMC'
      'is_all_day': false
      'title': 'Test Record'
      'description': '''
        Test Description!

        Let's see what Showdown can do.

        Auto-parsed link: http://www.valpo.edu

        Auto-parsed link: http://www.valpo.edu with text after

        HTML link: <a href="http://www.valpo.edu">Valpo</a>

        MarkDown link: [Valpo](http://www.valpo.edu)
      '''
      'url': 'http://www.valpo.edu'
      'categories': [11]
    store.find 'category'   # We will want all of the categories at runtime

  setupController: (controller) ->
    controller.set 'allCategories', @get('store').find('category')

  actions:
    loadState: (path, model) ->
      # console.log path
      if model? then @transitionTo path, model
      else @transitionTo path
    reloadState: (model) ->
      path = @get 'controller.currentRoute'
      @send 'loadState', path, model
    popAppState: (model) ->
      path = @get 'controller.lastRoute'
      @send 'loadState', path, model

    updateCategories: (activeCategories) ->
      destinationRoute = @controllerFor('application').get 'currentRoute'
      destinationModel = @modelFor destinationRoute

      model = @modelFor 'filters'
      model = App.Filter.create() if model is undefined
      model.set 'categories', activeCategories

      @transitionTo destinationRoute, model, destinationModel

App.IndexRoute = Em.Route.extend
  redirect: -> @transitionTo 'day'
