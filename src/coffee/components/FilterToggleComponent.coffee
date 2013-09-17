
require 'components/ButtonControlComponent'

App.FilterToggleComponent = App.ButtonControlComponent.extend
  classNames: ['btn-giving', 'filter-toggle']
  classNameBindings: ['isOpen:active']
  title: 'Filters'
  isOpen: Em.required Boolean
  isMobile: Em.required Boolean
  click: -> @toggleProperty 'isOpen'
  mouseEnter: ->
    isMobile = @get 'isMobile'
    if not isMobile then @set 'isOpen', true