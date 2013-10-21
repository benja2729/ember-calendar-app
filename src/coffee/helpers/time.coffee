
Em.Handlebars.registerBoundHelper 'time', (date, format) ->
  time = moment date
  clone = time.clone()
  
  if clone.startOf('day').diff(time) is 0 then 'Midnight'
  else if clone.hour(12).diff(time) is 0 then 'Noon'
  else
    format = if Em.typeOf(format) is 'string' then format
    else 'h:mm a'
    time.format format
