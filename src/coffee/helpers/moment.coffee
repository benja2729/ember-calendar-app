
Em.Handlebars.registerBoundHelper 'moment', (date, format) ->
  moment(date).format format
