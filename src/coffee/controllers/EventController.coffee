
App.EventController = Em.ObjectController.extend
  needs: ['day']
  filteredEventsBinding: 'controllers.day.filteredEvents'

  actions:
    back: ->
      events = @get('filteredEvents')
      if not Em.isEmpty(events) then @transitionToRoute('day')
      else
        #dunno
        window.history.back()
    closePane: (view) ->
      view.closePane().done =>
        @send 'popAppState'
