
define ['ember', 'moment'], (Em, moment) ->

  Em.Handlebars.registerBoundHelper 'date', (date) ->
    time = moment date
    time.format 'MMMM D, YYYY'

  Em