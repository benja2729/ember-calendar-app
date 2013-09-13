
App.ArchiveItemComponent = Em.Component.extend
  tagName: 'div'
  classNames: ['well', 'archive-item']
  event: Em.required 'App.Event'
  route: 'event'
  click: ->
    route = @get 'route'
    event = @get 'event'
    @transitionTo route, event
