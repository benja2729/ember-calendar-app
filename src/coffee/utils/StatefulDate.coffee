
define ['ember', './Core', 'moment', './Stateful', './DateProxy'], (Em, VU, moment) ->

  StatefulDate = Em.Mixin.create VU.Stateful,
    format: Em.required(String)

    _date: Em.required(VU.DateProxy)

    stateValue: Em.computed( (key, value) ->
      format = @get 'format'
      if value?
        date = VU.D moment(value, format).toDate()
        @set '_date', date
        value
      else
        date = @get('_date').toDate()
        moment(date).format format
    ).property '_date', 'format'

  VU.StatefulDate = StatefulDate