
App.EventController = Em.ObjectController.extend
  # needs: ['categories']

  startDate: Em.computed( ->
    moment @get('start')
  ).property 'start'

  endDate: Em.computed( ->
    moment @get('end')
  ).property 'end'

  isMultiDay: Em.computed( ->
    start = @get('startDate').date()
    end = @get('endDate').date()
    start isnt end
  ).property 'endDate'

  actions:
   closePane: (view) ->
      view.closePane().done =>
        @send 'popAppState'
