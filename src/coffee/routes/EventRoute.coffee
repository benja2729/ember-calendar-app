
require 'models/Event'
require 'controllers/EventController'
require 'views/EventView'

App.EventRoute = Em.Route.extend
  afterModel: ->
    # App.scrollTo '.page-header'
    App.scrollTo 'top'

  setupController: (controller, model) ->
    @controllerFor('application').set 'currentDay', moment(model.get 'start')
    controller.set 'model', model
