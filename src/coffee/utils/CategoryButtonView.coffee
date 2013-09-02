
require 'utils/ButtonView'

# Assumes that the view is being rendered with filters
# as the current controller
VU.CategoryButtonView = VU.ButtonView.extend
  filtersBinding: 'controller'
  target: Em.computed.alias 'filters'
  action: 'toggleCategory'
  classNameBindings: ['active']
  active: Em.computed( (key, value) ->
    id = @get 'context.id'
    categories = @get 'filters.categories'
    categories.contains id
  ).property 'filters.categories.@each'
