
define ['ember', 'ValpoUtils', 'App'], (Em, VU, App) ->

  FilterPaneView = Em.View.extend
    CategoryButton: VU.ButtonView.extend
      action: 'toggleCategory'
      actionContext: Em.computed.alias 'context'
      classNameBindings: ['active']
      active: Em.computed( (key, value) ->
        id = @get 'context.id'
        categories = @get 'controller.categories'
        categories.has id
      ).property 'controller.categories.mask'

  App.FilterPaneView = FilterPaneView
