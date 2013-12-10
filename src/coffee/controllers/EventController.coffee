
App.EventController = Em.ObjectController.extend
  needs: ['day']
  filteredEventsBinding: 'controllers.day.filteredEvents'

  actions:
    closePane: (view) ->
      view.closePane().done =>
        @send 'popAppState'
