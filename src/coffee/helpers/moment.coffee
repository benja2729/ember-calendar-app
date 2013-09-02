
debug = 0

Em.Handlebars.registerBoundHelper 'moment', (date, options) ->
  formatString = options.hash.format
  moment.unix(date).format formatString
