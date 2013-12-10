
require 'models/Event'
require 'controllers/EventController'
require 'views/EventView'

App.EventRoute = Em.Route.extend
  actions:
    back: ->
      model = @modelFor('day')
      if not Em.isEmpty(model) then @transitionTo('day', model)
      else @transitionTo('day')
