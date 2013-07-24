
define ['ember', './Core'], (Em, VU) ->

  BitObject = Em.ArrayProxy.extend
    mask: 0

    content: Em.computed( ->
      ret = Em.A()
      @bitwiseFn (term, mask) ->
        ret.push term
      ret
    ).property 'mask'

    add: (id) ->
      id = +id
      mask = @get 'mask'
      if 0 <= id < 31
        mask |= 1<<id
        @set 'mask', mask
      this

    addArray: (idArray) ->
      @add id for id in idArray
      this

    remove: (id) ->
      id = +id
      mask = @get 'mask'
      if 0 <= id < 31
        mask &= ~(1<<id)
        @set 'mask', mask
      this

    removeArray: (idArray) ->
      @remove id for id in idArray
      this

    toggle: (id) ->
      if @has id then @remove id
      else @add id
      this

    has: (id) ->
      (@get('mask') & 1<<+id) isnt 0

    bitwiseFn: (callback) ->
      mask = @get 'mask'
      term = 0  # Limited due to 32 bits (columns)
      while mask > 0 and term < 31
        if mask % 2 isnt 0
          callback.call this, term, mask
          console.log mask, term
        mask >>= 1
        term++
      this

    toString: ->
      mask = @get 'mask'
      mask.toString.apply mask, arguments

  BitObject.reopenClass
    create: (id, isMask = false) ->
      ret = @_super()
      if id?
        if Em.typeOf(id) is 'array'
          ret.addArray id
        else if isMask
          ret.set 'mask', id
        else ret.add id
      ret

  VU.BitObject = BitObject
