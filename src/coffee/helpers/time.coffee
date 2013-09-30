
Em.Handlebars.registerBoundHelper 'time', (date) ->
  time = moment date
  clone = time.clone()
  if clone.startOf('day').diff(time) is 0 then 'Midnight'
  else if clone.hour(12).diff(time) is 0 then 'Noon'
  else time.format 'h:mm a'
