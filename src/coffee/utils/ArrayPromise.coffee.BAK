
require 'Promisible'

VU.ArrayPromise = Em.ArrayProxy.extend VU.Promisible,
  content: Em.A()
  itemClass: Em.Object      # Model class. Will use this class to process the content

  processContent:  (data) ->
    length = @get 'length'
    dataLength = Em.get(data, 'length')
    itemClass = @get 'itemClass'

    @arrayContentWillChange length, 0, dataLength

    for event in data
      @addObject itemClass.create(event)

    @arrayContentDidChange length, 0, dataLength
