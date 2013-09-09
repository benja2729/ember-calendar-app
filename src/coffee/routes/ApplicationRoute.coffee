
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
  model: ->
    # The ApplicationRoute is the top-most route in the route hierarchy,
    # and its model hook gets called once when the app starts up.
    # @get('store').find 'category'   # We will want all of the categories at runtime

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

# App.IndexRoute = Em.Route.extend
#   redirect: ->
#     model = @modelFor('filters')

#     if model is undefined

#       # Manually calling the Route's model via prototype might
#       # not be the safest thing to do, so keep an eye on it
#       model = App.FiltersRoute.prototype.model
#         categories: '0'   # 0 stands for 'all' category

#     @transitionTo 'filters', model
