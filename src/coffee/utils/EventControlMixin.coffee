
App.EventControlMixin = Em.Mixin.create
  isMultiDay: Em.computed ->
    range = @get 'content.range'
    range.countInner('days') isnt 0

  isFeatured: Em.computed.alias 'content.isFeatured'
