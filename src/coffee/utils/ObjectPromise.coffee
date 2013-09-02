
define ['ember', './Core', './Promisible'], (Em, VU) ->

  ObjectPromise = Em.ObjectProxy.extend VU.Promisible,
    content: null
    processContent: (data) ->
      value = if Em.Array.detect(data) or Em.$.isArray(data) then data[0] else data
      @set 'content', value

  VU.ObjectPromise = ObjectPromise
