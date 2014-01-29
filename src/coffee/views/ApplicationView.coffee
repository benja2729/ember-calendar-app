
App.ApplicationView = Em.View.extend
  isMobileBinding: 'App.isMobile'
  classNames: ['st-container']
  classNameBindings: ['isMobile:is-mobile:not-mobile', 'transitionEffect', 'isOpen:st-menu-open'] #['row-fluid', 'pane', 'app-container']
  transitionEffect: Em.computed 'isMobile', ->
    isMobile = @get 'isMobile'
    if isMobile then 'st-effect-4'
    else 'st-effect-1'

  _setMenu: ( ->
    @set 'menu', $('.st-menu')
  ).on 'didInsertElement'
  isOpen: false
  isOpenBinding: 'controller.filtersAreOpen'
  filtersOpening: false
  filtersOpeningBinding: 'controller.filtersOpening'

  click: (e) ->
    {
      isMobile
      menu
      isOpen
      filtersOpening
    } = @getProperties 'isMobile', 'menu', 'isOpen', 'filtersOpening'
    inMenu =  menu.has(e.target).length > 0
    if isMobile and isOpen and not filtersOpening and not inMenu
      e.preventDefault()
      @set 'isOpen', false

  actions:
    # openMenu: ->
    #   isMobile = 
    closeMenu: ->
      isMobile = @get 'isMobile'
      if not isMobile then @set 'isOpen', false