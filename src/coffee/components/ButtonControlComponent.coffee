
App.ButtonControlComponent = Em.Component.extend
  tagName: 'button'
  classNames: ['btn', 'btn-primary']
  click: -> @sendAction 'action', this