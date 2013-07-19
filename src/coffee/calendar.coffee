
###
  This module is more-or-less the file for defining the routes.
  The Router itself is defined in the "Router" module and attached to the
  namespace in the "App" module.
###

require [

  # Modules passed to the defined function
  'ember', 'App', 'ValpoUtils', 'moment'

  # Ember MVC modules
  'models/Event-REST'
  'models/Filters'

  'controllers/ApplicationController'
  'controllers/FiltersController'
  'controllers/EventsController'
  'controllers/EventController'

  'views/ApplicationView'
  'views/FilterPaneView'
  'views/ActiveFiltersView'
  'views/EventsView'
  'views/EventView'

], (Em, App, VU, moment) ->

  Em.Route.reopen
    enter: ->
      # To add 'popAppState' funcitonality
      routeName = @get 'routeName'
      console.log "-----\nEntered #{routeName}\n-----"
      if /\.[^.]+$/.test routeName
        @controllerFor('application').set 'currentRoute', routeName

  App.ApplicationRoute = Em.Route.extend
    setupController: (controller, model) ->
      controller.setProperties
        categories: App.Category.find()
    events:
      updateFilters: (filters) ->
        eventsController = @controllerFor 'events'
        {start, end} = filters.getProperties 'start', 'end'

        model = App.Event.find {start, end}
        model.one 'isLoaded', =>
          eventsController.set 'model', model
          @transitionTo 'filters'

      popAppState: ->
        path = @get 'controller.lastRoute'
        console.log path
        @transitionTo path

  App.IndexRoute = Em.Route.extend
    redirect: ->
      # Manually calling the Route's model via prototype might
      # not be the safest thing to do, so keep an eye on it
      model = @modelFor('filters')
      if model?
        m = moment()
        model = App.FiltersRoute.prototype.model {
          categories: '0'   # 0 stands for 'all' category
          start: m.startOf('month').unix()
          end: m.endOf('month').unix()
        }
      @transitionTo 'filters', model

  App.FiltersRoute = Em.Route.extend
    serialize: (model, params) ->
      console.log 'FiltersRoute#serialize'
      ret = {}

      # Keys correspond to the dynamic segments on this route.
      # Each dynamic segment must be present on the Filters model
      # as a property
      for key in params
        property = model.get(key)

        ret[key] = switch key

          # Can handle a max of 30 different categories
          # 0 being 'all' and 1-30 the remaining categories
          # If more need be added a manual implimentation would
          # need to be create to maintain url persistence
          when 'categories', 'start', 'end' then property.toString()
      ret

    model: (params) ->
      categories = VU.BitObject.create params.categories, true
      App.Filters.create {
        categories
        start: params.start
        end: params.end
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

  App.FiltersIndexRoute = Em.Route.extend
    redirect: -> @transitionTo 'events'

  App.EventsRoute = Em.Route.extend
    # serialize: (model, params) ->
    #   ret = {}

    #   for key in params
    #     ret[key] = switch key
    #       when 'start' then model.get('firstObject.start.unix')
    #       when 'end' then model.get('lastObject.end.unix')
    #   ret

    model: (params) ->
      params = @modelFor('filters').getProperties 'start', 'end'
      App.Event.find params

    renderTemplate: (controller, model) ->
      @render 'events', {
        into: 'application'
        outlet: 'main'
        controller
      }

    events:
      showEventDetailPane: (context) ->
        @transitionTo 'event', context

  App.EventRoute = Em.Route.extend
    renderTemplate: (controller, model) ->
      @render 'event', {
        into: 'application'
        outlet: 'eventDetailPane'
        controller
      }

  App
