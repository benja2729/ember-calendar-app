
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

  actions:
    closeMenu: (type) ->
      {
        isMobile
        isOpen
        filtersOpening
      } = @getProperties 'isMobile', 'isOpen', 'filtersOpening'
      if isOpen and not filtersOpening
        if (isMobile and type is "st-pusher-skin") or
        (not isMobile and type is "st-menu")
          @set 'isOpen', false
