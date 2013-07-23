
define ['ember', 'ValpoUtils', 'App'], (Em, VU, App) ->

  EventsController = Em.ArrayController.extend
    needs: ['filters']

  App.EventsController = EventsController
