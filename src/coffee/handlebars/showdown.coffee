
define ['ember', 'libs/showdown'], (Em, showdown) ->

  Em.Handlebars.registerBoundHelper 'showdown', (text) ->
    try
      result = (new showdown.converter()).makeHtml text
      new Em.Handlebars.SafeString result
      
    catch e
      console.log 'Something went horribly wrong with the Showdown plugin in the showdown Handlebars helper.'
      'Invalid input text'

  Em