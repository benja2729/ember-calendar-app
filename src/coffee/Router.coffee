
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
  # @resource 'application', 
  @resource 'events', path: 'start/:start/end/:end', ->
    # @route 'index', path: 'list'
    @route 'month'
    @route 'week'
    @route 'day'
  @resource 'event', path: 'event/:event_id', ->
