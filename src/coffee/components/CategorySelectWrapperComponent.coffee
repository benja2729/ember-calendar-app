
require 'components/CategorySelectComponent'

App.CategorySelectWrapperComponent = Em.Component.extend
  categories: Em.required Array
  activeCategories: Em.required Array
  click: ->
    activeCategories = @get 'activeCategories'
    @sendAction 'action', activeCategories
