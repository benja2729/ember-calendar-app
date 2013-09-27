
require 'utils/EventControlMixin'

App.ArchiveItemComponent = Em.Component.extend App.EventControlMixin,
  tagName: 'div'
  classNames: ['well', 'archive-item']
  classNameBindings: ['isActive:active', 'popOut', 'isFeatured']
  content: Em.required 'App.Event'
  click: ->
    model = @get 'content'
    @sendAction 'action', model

  isActive: false
  _activeHandler: ((event) ->
    @toggleProperty 'isActive'
  ).on 'mouseEnter', 'mouseLeave'
  popOut: Em.computed.alias 'isActive'
