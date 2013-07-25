
define ['App', 'ember', 'ValpoUtils', 'moment'], (App, Em, VU, moment) ->

  Controller = Em.ObjectController.extend
    needs: ['filters']
    closePane: (view) ->
      view.closePane().done =>
        @send 'popAppState'

    startDate: Em.computed( ->
      VU.D @get('start')
    ).property 'start'

    endDate: Em.computed( ->
      VU.D @get('end')
    ).property 'end'

    isMultiDay: Em.computed( ->
      start = @get('startDate.date')
      end = @get('endDate.date')
      start is end
    ).property 'endDate'

  App.EventController = Controller