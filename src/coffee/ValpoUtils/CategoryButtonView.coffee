
define ['ember', './Core', './ButtonView'], (Em, VU) ->

  # Assumes that the view is being rendered with filters
  # as the current controller
  CategoryButtonView = VU.ButtonView.extend
    filtersBinding: 'controller'
    target: Em.computed.alias 'filters'
    action: 'toggleCategory'
    classNameBindings: ['active']
    active: Em.computed( (key, value) ->
      id = @get 'context.id'
      categories = @get 'filters.categories'
      categories.has id
    ).property 'filters.categories.mask'

  VU.CategoryButtonView = CategoryButtonView
