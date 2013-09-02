
define ['ember', './Core', './Stateful'], (Em, VU) ->

  StatefulRoute = Em.Route.extend
    # contextDidChange: ->
    #   console.log 'StatefulRoute#contextDidChange: ', @context, @currentModel
    #   @_super()
    enter: ->
      console.log 'StatefulRoute#enter', @context, @currentModel
      @_super()
    # activate: ->
    #   console.log 'StatefulRoute#activate', @context, @currentModel
    #   @_super()
    # setup: (context) ->
    #   console.log 'StatefulRoute#setup', context, @context, context is @context, @currentModel
    #   @_super context
    serialize: (model, params) ->
      # console.groupCollapsed 'StatefulRoute#serialize'
      # console.log model, params

      if params.length isnt 1 then return
      object = {}
      name = params[0]

      if VU.Stateful.detect(model)
        object[name] = model.get('stateValue')
      else object = @_super model, params

      # console.log object
      # console.groupEnd 'StatefulRoute#serialize'
      object

  VU.StatefulRoute = StatefulRoute
