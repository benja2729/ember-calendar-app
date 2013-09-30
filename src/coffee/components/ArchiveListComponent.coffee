
require 'components/ArchiveItemComponent'

App.ArchiveListComponent = Em.Component.extend
  classNames: ['archive-list']
  classNameBindings: ['animate:fader']
  items: Em.required Array
  isMobileBinding: 'App.isMobile'
  animate: true

  actions:
    displayItem: (item) ->
      isMobile = @get 'isMobile'
      action = if isMobile then 'load' else 'show'
      @sendAction action, item
