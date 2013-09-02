
require 'routes/ApplicationRoute'
# require 'routes/CategoriesRoute'
require 'routes/EventsRoute'
require 'routes/EventRoute'


App.Router.map ->

  # @resource 'categories', path: '/:categories', ->
  #   @resource 'events', path: 'start/:start/end/:end', ->
  #     @route 'month'
  #     @route 'week'
  #     @route 'day'
  # @resource 'categories', ':categories', ->
  @resource 'filters', path: 'start/:start/end/:end', ->
    @resource 'events', ->
      @route 'index', path: 'day'
      @route 'month'
      @route 'week'
    @resource 'event', path: 'event/:event_id', ->
