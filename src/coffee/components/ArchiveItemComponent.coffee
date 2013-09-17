
App.ArchiveItemComponent = Em.Component.extend
  tagName: 'div'
  classNames: ['well', 'archive-item']
  classNameBindings: ['isActive:active', 'popOut']
  event: Em.required 'App.Event'
  route: 'event'
  click: ->
    route = @get 'route'
    model = @get 'event'
    @sendAction 'load', {route, model}

  isActive: false
  _activeHandler: ((event) ->
    @toggleProperty 'isActive'
  ).on 'mouseEnter', 'mouseLeave'
  popOut: Em.computed.alias 'isActive'
