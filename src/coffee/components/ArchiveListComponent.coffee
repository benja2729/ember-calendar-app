
require 'components/ArchiveItemComponent'

App.ArchiveListComponent = Em.Component.extend
  classNames: ['archive-list']
  items: Em.required Array

  actions:
    loadItem: (transition) ->
      @sendAction 'transition', transition