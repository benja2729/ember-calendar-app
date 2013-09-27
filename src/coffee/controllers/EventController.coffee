
require 'utils/EventControlMixin'

App.EventController = Em.ObjectController.extend App.EventControlMixin,
  # needs: ['categories']

  actions:
   closePane: (view) ->
      view.closePane().done =>
        @send 'popAppState'
