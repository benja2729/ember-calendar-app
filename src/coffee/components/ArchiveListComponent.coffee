
require 'components/ArchiveItemComponent'

App.ArchiveListComponent = Em.Component.extend
  classNames: ['archive-list row']
  classNameBindings: ['animate:fader']
  items: Em.required Array
  isMobileBinding: 'App.isMobile'
  animate: true
