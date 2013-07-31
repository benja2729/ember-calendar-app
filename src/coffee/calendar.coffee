
###
  This module is more-or-less the file for defining the routes.
  The Router itself is defined in the "Router" module and attached to the
  namespace in the "App" module.
###

require [

  # Modules passed to the defined function
  'ember', 'App', 'ValpoUtils', 'moment'

  'libs/daterangepicker'

  # Ember MVC modules
  'models/Event-REST'

  'controllers/ApplicationController'
  'controllers/FiltersController'
  'controllers/EventsController'
  'controllers/EventController'

  'views/ApplicationView'
  'views/FilterPaneView'
  'views/ActiveFiltersView'
  'views/EventsView'

  'views/EventsListView'    # Want to get this into
  
  'views/EventView'

], (Em, App, VU, moment) ->

  Em.Route.reopen
    enter: ->
      # To add 'popAppState' funcitonality
      routeName = @get 'routeName'
      # console.log "-----\nEntered #{routeName}\n-----"
      if /\.[^.]+$/.test routeName
        @controllerFor('application').set 'currentRoute', routeName

  App.ApplicationRoute = Em.Route.extend
    setupController: (controller, model) ->

      # Send an empty object into find to trigger 'didLoad' for some reason... >_<
      categories = App.Category.find({}).one 'didLoad', categories, ->

        # Wrap setting of ready state to be scheduled after
        # bindings have been resolved to force category calls
        # while filtering to be fetched from the Store
        Em.run.scheduleOnce 'actions', this, ->
          controller.set 'isReady', true

      controller.set 'categories', categories
    events:
      loadState: (path, model) ->
        # console.log path
        if model? then @transitionTo path, model
        else @transitionTo path
      reloadState: (model) ->
        path = @get 'controller.currentRoute'
        @send 'loadState', path, model
      popAppState: (model) ->
        path = @get 'controller.lastRoute'
        @send 'loadState', path, model

  App.IndexRoute = Em.Route.extend
    redirect: ->
      model = @modelFor('filters')

      if model is undefined

        # Manually calling the Route's model via prototype might
        # not be the safest thing to do, so keep an eye on it
        model = App.FiltersRoute.prototype.model
          categories: '0'   # 0 stands for 'all' category

      @transitionTo 'filters', model

  App.FiltersRoute = Em.Route.extend
    serialize: (model, params) ->
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
          when 'categories' then property.toString()
      ret

    setupController: (controller, model) ->
      window.FiltersController = controller
      @_super.apply this, arguments

    model: (params) ->
      categories = VU.BitObject.create params.categories, true
      App.Filters.create {
        categories
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
    redirect: ->
      model = @modelFor 'events'

      if model is undefined
        # m = moment().startOf 'day'
        # start = m.unix()
        # end = m.endOf('day').unix()

        filters = @controllerFor 'filters'
        # filters.setProperties {start, end}
        params = filters.getProperties 'start', 'end'

        # Manually calling the Route's model via prototype might
        # not be the safest thing to do, so keep an eye on it
        # model = App.EventsRoute.prototype.model {start, end}
        model = App.EventsRoute.prototype.model params

      @transitionTo 'events', model

  App.EventsRoute = Em.Route.extend
    serialize: (model, params) ->
      ret = {}

      if model.get('length') < 1
        filters = @controllerFor 'filters'
        ret[key] = filters.get key for key in params

      else
        for key in params
          ret[key] = switch key
            when 'start' then model.get('firstObject.start.unix')
            when 'end' then model.get('lastObject.end.unix')
      ret

    model: (params) ->
      App.Event.find params

    setupController: (controller, model) ->
      window.EventsController = controller
      @_super.apply this, arguments

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
