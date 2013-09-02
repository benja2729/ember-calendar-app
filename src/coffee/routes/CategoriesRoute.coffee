
require 'models/Category'
require 'controllers/CategoriesController'
require 'views/CategoriesControlListView'

App.CategoriesRoute = Em.Route.extend
  serialize: (model, params) ->
    ret = {}
    ids = model.mapProperty 'id'
    ret[params[0]] = ids.join ','
    ret

  model: (params) ->
    ret = []
    for id in params.categories.split ','
      ret.push App.Category.find(id)
    ret

  renderTemplate: (controller, model) ->
    @render 'categories/control-list', {
      into: 'application'
      outlet: 'controlList'
      controller
    }
