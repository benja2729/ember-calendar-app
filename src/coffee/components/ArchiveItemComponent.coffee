
require 'utils/EventControlMixin'

App.ArchiveItemComponent = Em.Component.extend App.EventControlMixin,
  tagName: 'div'
  classNames: ['well', 'archive-item']
  classNameBindings: ['isActive:active', 'popOut', 'isFeatured', 'isModal:modal', 'fade', 'fade:in']
  content: Em.required 'App.Event'
  click: ->
    model = @get 'content'
    @sendAction 'action', model
    # @toggleProperty 'isModal'
  _activeHandler: ((event) ->
    @toggleProperty 'isActive'
  ).on 'mouseEnter', 'mouseLeave'
  _modalObserver: Em.observer( ->
    @set 'animate', not @get('isModal')
  , 'isModal')

  animate: true
  isModal: false
  fade: Em.computed.and 'animate', 'isModal'
  isActive: false
  popOut: Em.computed.and 'isActive', 'animate'
