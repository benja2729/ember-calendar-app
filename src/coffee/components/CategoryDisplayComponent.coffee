
App.CategoryDisplayComponent = Em.Component.extend
  category: Em.required 'Category'
  # activeCategories: Em.required 'Category Array'
  nameBinding: 'category.name'
  classNames: ['category-display']
  classNameBindings: ['isActive:text-warning:text-muted']
  isActive: Em.computed 'category', 'activeCategories.[]', ->
    {activeCategories, category} = @getProperties 'activeCategories', 'category'
    # return true if activeCategories.get('length') is 0
    activeCategories.contains category
