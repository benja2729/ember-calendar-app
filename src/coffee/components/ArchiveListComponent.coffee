
require 'components/ArchiveItemComponent'

App.ArchiveListComponent = Em.Component.extend
  classNames: ['archive-list']
  items: Em.required Array
  isMobileBinding: 'App.isMobile'

  actions:
    displayItem: (item) ->
      isMobile = @get 'isMobile'
      action = if isMobile then 'load' else 'show'
      @sendAction action, item
