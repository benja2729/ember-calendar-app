
require 'components/CategorySelectComponent'

App.CategorySelectWrapperComponent = Em.Component.extend
  categories: Em.required Array
  activeCategories: Em.required Array
  displayList: Em.computed 'activeCategories', ->
    # TODO: create a sorted list for categories
  click: ->
    activeCategories = @get 'activeCategories'
    @sendAction 'action', activeCategories
