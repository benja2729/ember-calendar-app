
nlRegex = /\\n|\\r/g
nlRplStr = "\n"

linkRegex = ///
  (\s+|^)           # Must be either beginning of string or its own word
  (https?:\/\/.*)   # The url to be aliased under $2 in linkRplStr
  [\.,\?\!:;]?      # Just to make sure there is no punctuaion after the url
  (\s+|$)           # Must be either beginning of string or its own word
///g
linkRplStr = "<a href=\"$2\">$2</a>"

Em.Handlebars.registerBoundHelper 'showdown', (text) ->
  try
    result = text.replace nlRegex, nlRplStr
    result = (new Showdown.converter()).makeHtml result
    result = result.replace linkRegex, linkRplStr
    new Em.Handlebars.SafeString result
    
  catch e
    console.log 'Something went horribly wrong with the Showdown plugin in the showdown Handlebars helper.'
    'Invalid input text'
