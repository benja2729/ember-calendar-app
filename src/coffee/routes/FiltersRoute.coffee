
get = Em.get
set = Em.set

require 'controllers/FiltersController'
require 'views/FiltersView'

format = 'MM-DD-YYYY'

App.FiltersRoute = Em.Route.extend
  model: (params) ->
    store = @get 'store'
    ids = Em.A params.categories.split(',')
    categories = store.filter 'category', (item) -> ids.contains get(item, 'id')

    Em.Object.create {
      categories
    }

  serialize: (model, params) ->
    ret = {}
    ret['categories'] = get(model, 'categories').mapBy('id').join ','
    ret

  # setupController: (controller, model) ->
  #   debugger
  #   store = @get 'store'
  #   controller.set 'allCategories', store.findAll('category')
