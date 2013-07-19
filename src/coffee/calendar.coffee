
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

  'controllers/MonthController'
  'controllers/DateController'
  'views/MonthView'

  'controllers/EventController'
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

  App.ApplicationController = Em.Controller.extend
    categories: Em.A()

    lastRoute: null
    currentRoute: null
    lastPath: null

    _routeChangeObserver: Em.beforeObserver( (controller, property) ->
      @set 'lastRoute', @get(property)
      console.log @get(property)
    , 'currentRoute')

    _pathChangeObserver: Em.beforeObserver( (controller, property) ->
      @set 'lastPath', @get(property)
      console.log @get(property)
    , 'currentPath')

    # Fore dev purposes only
    _propertyChangeObserver: Em.observer( (controller, property) ->
      console.log "- Property #{property} has changed to #{@get(property)}"
    , 'lastPath', 'lastRoute', 'currentPath', 'currentRoute')

  App.ApplicationView = Em.View.extend
    classNames: ['row-fluid', 'pane', 'app-container']
    bodyClassName: 'main-pane'
    filtersClassName: 'filter-pane'

    FilterToggle: VU.ButtonView.extend
      classNames: ['filter-toggle']
      action: 'showFilters'
      target: 'parentView'
      actionContext: Em.computed.alias 'element'

    showFilters: (buttonElement) ->
      # TODO: Add functionality for when the browser resizes
      $this = $(@get 'element')
      $body = $this.find('.' + @get 'bodyClassName')
      $filters = $this.find('.' + @get 'filtersClassName')
      $button = $(buttonElement)

      buttonWidth = $button.outerWidth true
      filtersWidth = $filters.outerWidth true
      windowWidth = $(window).width()

      left = if parseInt($body.css('left'), 10) > 0 then 0
      else
        if buttonWidth + filtersWidth > windowWidth
          windowWidth - buttonWidth
        else filtersWidth / $this.width() * 100 + '%'
      $body.animate {left}

  App.IndexRoute = Em.Route.extend
    redirect: ->
      # Manually calling the Route's model via prototype might
      # not be the safest thing to do, so keep an eye on it
      model = @modelFor('filters')
      if model?
        {start, end} = VU.D().getRange('month', 'unix')
        model = App.FiltersRoute.prototype.model {
          categories: '0'   # 0 stands for 'all' category
          start
          end
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

  App.FiltersController = Em.ObjectController.extend
    needs: ['application']
    toggleCategory: (category) ->
      categories = @get 'categories'
      id = category.get 'id'
      @set 'categories', categories.toggle(id)

  App.FilterPaneView = Em.View.extend
    CategoryButton: VU.ButtonView.extend
      action: 'toggleCategory'
      actionContext: Em.computed.alias 'context'
      classNameBindings: ['active']
      active: Em.computed( (key, value) ->
        id = @get 'context.id'
        categories = @get 'controller.categories'
        categories.has id
      ).property 'controller.categories.mask'

  App.ActiveFiltersView = Em.View.extend()

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

  App.EventsController = Em.ArrayController.extend()

  App.EventsView = Em.View.extend()

  App.EventRoute = Em.Route.extend
    renderTemplate: (controller, model) ->
      @render 'event', {
        into: 'application'
        outlet: 'eventDetailPane'
        controller
      }
