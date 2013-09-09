
App.CategorySelectComponent = Em.Component.extend
  tagName: 'li'
  name: Em.required String
  category: Em.required 'Category'
  activeCategories: Em.required 'Category Array'
  classNameBindings: ['active']
  active: Em.computed 'activeCategories.length', -> !!(@get('activeCategories')?.contains @get('category'))

  addCategory: -> @get('activeCategories')?.addObject @get('category')
  removeCategory: -> @get('activeCategories').removeObject @get('category')
  click: (event) ->
    event.preventDefault()
    if @get('active') then @removeCategory()
    else @addCategory()
