
Em.Handlebars.registerBoundHelper 'time', (date) ->
  time = moment date
  clone = time.clone()
  if clone.startOf('day').diff(time) is 0 then 'midnight'
  else if clone.hour(12).diff(time) is 0 then 'noon'
  else time.format 'hh:mm a'
