
App.HelpRoute = Em.Route.extend
  # textPath should be relative to the app uri
  textPath: 'HelpText.md'
  model: ->
    currentModel = @get('currentModel')
    if currentModel then return currentModel
    
    model = {text: ''}
    deferred = $.Deferred()
    promise = $.ajax(@get 'textPath').then (text) =>
      model.text = text
      deferred.resolveWith this, [model]
    deferred.promise()
