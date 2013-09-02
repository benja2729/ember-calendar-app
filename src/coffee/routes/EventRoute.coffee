
require 'models/Event'
require 'controllers/EventController'
require 'views/EventView'

App.EventRoute = Em.Route.extend()
  # renderTemplate: (controller, model) ->
  #   @render 'event', {
  #     into: 'application'
  #     outlet: 'eventDetailPane'
  #     controller
  #   }
