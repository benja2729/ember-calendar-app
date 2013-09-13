
App.FilterToggleComponent = Em.Component.extend
  tagName: 'button'
  classNames: ['btn', 'btn-primary', 'btn-giving','filter-toggle']
  classNameBindings: ['isOpen:active']
  title: 'Filters'
  isOpen: Em.required Boolean
  isMobile: Em.required Boolean
  click: -> @toggleProperty 'isOpen'
  mouseEnter: ->
    isMobile = @get 'isMobile'
    if not isMobile then @set 'isOpen', true
