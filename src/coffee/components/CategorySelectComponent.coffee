
App.CategorySelectComponent = Em.Component.extend
  tagName: 'li'
  name: Em.required String
  category: Em.required 'Category'
  activeCategories: Em.required 'Category Array'
  classNameBindings: ['active']
  active: Em.computed 'activeCategories.length', -> !!(@get('activeCategories')?.contains @get('category.id'))

  addCategory: -> @get('activeCategories')?.addObject @get('category.id')
  removeCategory: -> @get('activeCategories').removeObject @get('category.id')
  click: (event) ->
    event.preventDefault()
    if @get('active') then @removeCategory()
    else @addCategory()
