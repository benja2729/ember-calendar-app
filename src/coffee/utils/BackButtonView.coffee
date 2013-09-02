
require 'ButtonView'

VU.BackButtonView = VU.ButtonView.extend
  classNames: ['back-button']
  actionContext: 'controller'
  action: 'popAppState'
