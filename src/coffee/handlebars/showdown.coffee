
define ['ember', 'libs/showdown'], (Em, showdown) ->

  Em.Handlebars.registerBoundHelper 'showdown', (text) ->
    try
      result = (new showdown.converter()).makeHtml text
      new Em.Handlebars.SafeString result
      
    catch e
      'Invalid input text'

  Em