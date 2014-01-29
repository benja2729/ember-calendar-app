
App.CategorySelectWrapperComponent = Em.Component.extend
  categories: Em.required Array
  activeCategories: Em.required Array
  _activeCategoriesObserver: ( ->
    @send 'updateCategories'
  ).observes 'activeCategories.length'

  actions:
    clearCategories: ->
      @get('activeCategories')?.clear()
    updateCategories: ->
      activeCategories = @get 'activeCategories'
      @sendAction 'action', activeCategories
