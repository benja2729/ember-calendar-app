
require 'models/Filter'
require 'controllers/FiltersController'
require 'views/FiltersView'

App.FiltersRoute = Em.Route.extend
  model: (params) ->
    if params.categories is 'all' or params.categories is undefined then return App.Filter.create
      categories: Em.A()

    # params.categories ?= '11'
    categories = Em.A params.categories.split(',')

    App.Filter.create {
      categories
    }

  serialize: (model, params) ->
    ret = {}
    catArray = Em.get(model, 'categories') #.mapBy('id')

    ret['categories'] = if catArray.length is 0 then 'all'
    else
      catArray.sort (a, b) -> parseInt(a) > parseInt(b)
      catArray.join ','

    ret
