
# require 'utils/iCalObject'

App.IcalButtonComponent = Em.Component.extend
  # The component expects to be sent properly filtered events
  events: Em.required Array
  tagName: 'button'
  classNames: ['ical-button', 'btn']
  classNameBindings: ['enabled::disabled']
  enabled: Em.computed.and 'isSupported', 'hasEvents'
  isSupported: Em.computed ->
    try
      new Blob()
      return true
    catch e
      return false
  hasEvents: Em.computed.notEmpty 'events.[]'
  title: Em.computed 'isSupported', (key, value) ->
    isSupported = @get 'isSupported'
    if isSupported
      if value? then value
      else 'Download iCal'
    else 'iCal Not Supported'
  fileName: Em.computed (key, value) ->
    if value? then value
    else
      serializedUrl = window.location.hash.replace(/^#\//, '').replace(/[\/,]+/g, '.')
      "#{serializedUrl}.ics"
  .volatile()
  iCalObject: Em.computed 'events', ->
    events = @get 'events'
    App.iCalObject.create {events}
  click: -> @send 'saveAs' if @get 'enabled'
  actions:
    saveAs: ->
      {iCalObject, fileName} = @getProperties 'iCalObject', 'fileName'
      blob = iCalObject.toBlob()
      saveAs blob, fileName
