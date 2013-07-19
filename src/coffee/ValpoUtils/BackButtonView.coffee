
define ['ember', './Core', './ButtonView'], (Em, VU) ->

  BackButtonView = VU.ButtonView.extend
    classNames: ['back-button']
    actionContext: 'controller'
    action: 'popAppState'

  VU.BackButtonView = BackButtonView
