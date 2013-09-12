
shortWords = ['of','a','the','and','an','or','nor','but','is','if','then','else','when','at','from','by','on','off','for','in','out','over','to','into','with']
s = '\\s+'
swRegEx = new RegExp s + shortWords.join(s + '|' + s) + s

Em.Handlebars.registerBoundHelper 'title-case', (str) ->
  if swRegEx.test str
    strArray = str.split ' '
    # string replace to