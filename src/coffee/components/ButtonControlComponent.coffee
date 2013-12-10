
App.ButtonControlComponent = Em.Component.extend
  tagName: 'button'
  classNames: ['btn']
  click: -> @sendAction 'action', this