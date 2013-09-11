
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
    @get('store').find 'category'   # We will want all of the categories at runtime

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
      model = @modelFor 'filters'
      model = App.Filter.create() if model is undefined
      model.set 'categories', activeCategories
      # @send 'reloadState', model
      @transitionTo 'filters', model

# App.IndexRoute = Em.Route.extend
#   redirect: -> @transitionTo 'filters'
