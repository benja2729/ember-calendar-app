
define ['ember', 'moment'], (Em, moment) ->

  Em.Handlebars.registerBoundHelper 'time', (date) ->
    date = moment date
    clone = date.clone()
    if clone.startOf('day').diff(date) is 0 then 'midnight'
    else if clone.hour(12).diff(date) is 0 then 'noon'
    else date.format 'hh:mm a'

  Em