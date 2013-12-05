
require 'utils/EventControlMixin'

App.ArchiveItemComponent = Em.Component.extend App.EventControlMixin,
  tagName: 'div'
  # classNames: ['well', 'archive-item']
  classNames: ['col-xs-12', 'col-inline', 'layout-block']
  # classNameBindings: ['isFeatured']
  content: Em.required 'App.Event'
  click: ->
    model = @get 'content'
    @sendAction 'action', model
    # @toggleProperty 'isModal'
  _activeHandler: ((event) ->
    @toggleProperty 'isActive'
  ).on 'mouseEnter', 'mouseLeave'

  animate: true
  isActive: false
  popOut: Em.computed.and 'isActive', 'animate'
