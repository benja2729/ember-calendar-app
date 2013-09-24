
nlRegex = /\\n|\\r/g
nlRplStr = "\n"

linkRegex = ///

  # Must be either beginning of string or its own word
  (\s+|^)

  # The url to be aliased under $2 in linkRplStr
  (https?://[^<\s]*)

  # Must be either beginning of string or its own word
  (.*(?:$|\s+))
///g
linkRplStr = "$1<a href=\"$2\">$2</a>$3"

Em.Handlebars.registerBoundHelper 'showdown', (text) ->
  try
    result = text.replace nlRegex, nlRplStr
    result = (new Showdown.converter()).makeHtml result
    result.replace linkRegex, ->
      console.log arguments
      ""
    result = result.replace linkRegex, linkRplStr
    new Em.Handlebars.SafeString result
    
  catch e
    console.log 'Something went horribly wrong with the Showdown plugin in the showdown Handlebars helper.'
    'Invalid input text'
