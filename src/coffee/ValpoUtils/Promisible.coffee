
define ['ember', './Core'], (Em, VU) ->
  
  Promisible = Em.Mixin.create
    init: ->
      @_super()
      @get('promise').done (data) =>
        @set 'isLoaded', true
        @processContent data.ResultSet

    promise: null
    isLoaded: false

    processContent: Em.required Function

  VU.Promisible = Promisible
    