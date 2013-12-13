
require 'models/Event'
require 'controllers/EventController'
require 'views/EventView'

App.EventRoute = Em.Route.extend
  afterModel: ->
    $('.pane-body').scrollTop(0)
