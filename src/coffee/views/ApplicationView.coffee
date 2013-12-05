
require 'utils/ButtonView'

App.ApplicationView = Em.View.extend
  _removeLoader: ( ->
    $('#loader').remove()
  ).on 'willInsertElement'
  
  isMobileBinding: 'App.isMobile'
  classNames: ['st-container']
  classNameBindings: ['isMobile:is-mobile:not-mobile', 'transitionEffect', 'isOpen:st-menu-open'] #['row-fluid', 'pane', 'app-container']
  transitionEffect: Em.computed 'isMobile', ->
    isMobile = @get 'isMobile'
    if isMobile then 'st-effect-4'
    else 'st-effect-1'

  isOpen: false
  isOpenBinding: 'controller.filtersAreOpen'
  # isOpen: false
  # _defaultOpen: ( ->
  #   @set 'isOpen', not @get('isMobile')
  #   Em.run.later( =>
  #     term = @get('isOpen')
  #     if term then @set('isOpen', false)
  #   , 2500)
  # ).on 'init'

  actions:
    # openMenu: ->
    #   isMobile = 
    closeMenu: ->
      isMobile = @get 'isMobile'
      if not isMobile then @set 'isOpen', false