
define ['ember', 'moment'], (Em, moment) ->

  debug = 0

  Em.Handlebars.registerBoundHelper 'moment', (date, options) ->
    formatString = options.hash.format
    moment(date).format formatString

  Em