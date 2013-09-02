
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

  App
