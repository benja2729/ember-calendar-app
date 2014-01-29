
# require 'components/ButtonControlComponent'

# App.FilterToggleComponent = App.ButtonControlComponent.extend
App.FilterToggleComponent = Em.Component.extend
  classNames: ['filter-toggle']
  classNameBindings: ['isOpen:active']
  title: 'Filters'
  isOpen: Em.required Boolean
  _isOpenObserver: ( ->
    @sendAction 'action', @get('isOpen')
  ).observes 'isOpen'
  isMobileBinding: 'App.isMobile'
  click: (e) ->
    e.preventDefault()
    @toggleProperty 'isOpen'
  # mouseEnter: ->
  #   isMobile = @get 'isMobile'
  #   if not isMobile then @set 'isOpen', true
