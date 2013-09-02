
Em.Handlebars.registerBoundHelper 'date', (date) ->
  time = moment.unix date
  time.format 'MMMM D, YYYY'
