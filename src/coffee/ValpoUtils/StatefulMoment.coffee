
define ['ember', './Core', 'moment', './Stateful'], (Em, VU, moment) ->

  StatefulMoment = Em.Mixin.create VU.Stateful,
    format: Em.required String

    currentDate: Em.required moment

    startDate: Em.computed( ->
      @get('currentDate').copy().startOf 'month'
    ).property 'currentDate'

    endDate: Em.computed( ->
      @get('currentDate').copy().endOf 'month'
    ).property 'currentDate'

    stateValue: Em.computed( ->
      @get('currentDate').format @get('format')
    ).property 'currentDate', 'format'

  VU.StatefulMoment = StatefulMoment