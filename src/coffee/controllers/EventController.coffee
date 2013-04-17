
define ['App', 'ember', 'moment'], (App, Em, moment) ->

  Controller = Em.ObjectController.extend
    closeModal: -> @transitionToRoute 'events'

    startDate: Em.computed( ->
      moment @get('start')
    ).property 'start'

    endDate: Em.computed( ->
      moment @get('end')
    ).property 'end'

    isMultiDay: Em.computed( ->
      start = @get('startDate').clone().startOf 'day'
      end = @get('endDate').clone().startOf 'day'
      if start.diff(end) < 0 then true else false
    ).property 'startDate', 'endDate'

  App.EventController = Controller