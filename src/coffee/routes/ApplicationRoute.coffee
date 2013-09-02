
require 'models/Category'
require 'controllers/ApplicationController'
require 'views/ApplicationView'

format = 'MM-DD-YYYY'

Em.Route.reopen
  enter: ->
    # To add 'popAppState' funcitonality
    routeName = @get 'routeName'
    # console.log "-----\nEntered #{routeName}\n-----"
    if /\.[^.]+$/.test routeName
      @controllerFor('application').set 'currentRoute', routeName

App.ApplicationRoute = Em.Route.extend
  setupController: (controller, model) ->

    # Send an empty object into find to trigger 'didLoad' for some reason... >_<
    allCategories = App.Category.find({}).one 'didLoad', categories, ->

      # Wrap setting of ready state to be scheduled after
      # bindings have been resolved to force category calls
      # while filtering to be fetched from the Store
      Em.run.scheduleOnce 'actions', this, ->
        controller.set 'isReady', true

    controller.set 'allCategories', allCategories
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

# App.IndexRoute = Em.Route.extend
#   redirect: ->
#     model = @modelFor('filters')

#     if model is undefined

#       # Manually calling the Route's model via prototype might
#       # not be the safest thing to do, so keep an eye on it
#       model = App.FiltersRoute.prototype.model
#         categories: '0'   # 0 stands for 'all' category

#     @transitionTo 'filters', model
