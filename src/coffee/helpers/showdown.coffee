
Em.Handlebars.registerBoundHelper 'showdown', (text) ->
  try
    result = (new Showdown.converter()).makeHtml text.replace(/\\n|\\r/g, '\n')
    new Em.Handlebars.SafeString result
    
  catch e
    console.log 'Something went horribly wrong with the Showdown plugin in the showdown Handlebars helper.'
    'Invalid input text'
