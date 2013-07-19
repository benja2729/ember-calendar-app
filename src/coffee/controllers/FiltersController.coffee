
define ['ember', 'ValpoUtils', 'App'], (Em, VU, App) ->

  FiltersController = Em.ObjectController.extend
    needs: ['application']
    toggleCategory: (category) ->
      categories = @get 'categories'
      id = category.get 'id'
      @set 'categories', categories.toggle(id)

  App.FiltersController = FiltersController
