
require 'models/Filter'
require 'controllers/FiltersController'
require 'views/FiltersView'

App.FiltersRoute = Em.Route.extend
  model: (params) ->
    currentModel = @get('currentModel')
    if currentModel then return currentModel
    
    store = @get 'store'
    c = params.categories

    categories = if c is 'all' or c is undefined then [] else params.categories.split(',')
    store.push 'filter',
      'id': 1
      'categories': categories

    # deferred = $.Deferred()
    # store = @get('store')

    # console.log params.categories

    # if params.categories is 'all' or params.categories is undefined then return App.Filter.create
    #   categories: Em.A()

    # # params.categories ?= '11'
    # categories = params.categories.split(',')
    # promise = store.findByIds 'category', params.categories
    # promise.then (categories) =>
    #   console.log 'in promise then', categories
    #   model = App.Filter.create {
    #     categories
    #   }
    #   deferred.resolveWith this, [model]

    # deferred.promise()

  # setupController: (controller, model) ->
  #   store = @get 'store'
  #   categories = store.findAll 'category'
  #   controller.set 'allCategories', categories

  serialize: (model, params) ->
    ret = {}
    catArray = Em.get(model, 'categories').mapBy('id')

    ret['categories'] = if catArray.length is 0 then 'all'
    else
      catArray.sort (a, b) -> parseInt(a) > parseInt(b)
      catArray.join ','

    ret
