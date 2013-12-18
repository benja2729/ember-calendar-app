
require 'components/ButtonControlComponent'

App.FilterToggleComponent = App.ButtonControlComponent.extend
  classNames: ['filter-toggle']
  classNameBindings: ['isOpen:active']
  title: 'Filters'
  isOpen: Em.required Boolean
  # _isOpenObserver: Em.observer 'isOpen', ->
  #   console.log @get('isOpen')
  #   @sendAction 'action', @get('isOpen')
  isMobile: Em.required Boolean
  click: -> @toggleProperty 'isOpen'
  # mouseEnter: ->
  #   isMobile = @get 'isMobile'
  #   if not isMobile then @set 'isOpen', true
