
require 'models/Filters'
require 'controllers/CategoriesController'
require 'views/FilterPaneView'
require 'views/ActiveFiltersView'

require 'models/Category'

App.CategoriessRoute = Em.Route.extend
  serialize: (model, params) ->
    ret = {}

    # Keys correspond to the dynamic segments on this route.
    # Each dynamic segment must be present on the Filters model
    # as a property
    for key in params
      property = model.get(key)

      ret[key] = switch key
        when 'categories' then property.join ','
        when 'start' then property
        when 'end' then property
    ret

  setupController: (controller, model) ->


  model: (params) ->
    App.Filters.create {
      start: params.start
      end: params.end
      categories: params.categories.split ','
    }

  renderTemplate: (controller, model) ->
    @render 'filter-pane', {
      into: 'application'
      outlet: 'filterPane'
      controller
    }

    @render 'active-filters', {
      into: 'application'
      outlet: 'activeFilters'
      controller
    }

# App.FiltersIndexRoute = Em.Route.extend
#   redirect: ->
#     model = @modelFor 'events'

#     if model is undefined
#       # m = moment().startOf 'day'
#       # start = m.unix()
#       # end = m.endOf('day').unix()

#       filters = @controllerFor 'filters'
#       # filters.setProperties {start, end}
#       params = filters.getProperties 'start', 'end'

#       # Manually calling the Route's model via prototype might
#       # not be the safest thing to do, so keep an eye on it
#       # model = App.EventsRoute.prototype.model {start, end}
#       model = App.EventsRoute.prototype.model params

    # @transitionTo 'events', model
