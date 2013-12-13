
require 'routes/ApplicationRoute'
require 'routes/LoadingRoute'
require 'routes/FiltersRoute'
require 'routes/DayRoute'
# require 'routes/EventsRoute'
require 'routes/EventRoute'
require 'routes/HelpRoute'

App.Router.map ->
  @resource 'filters', path: ':categories', ->
    @resource 'day', path: 'day/:day', ->
  @resource 'event', path: 'event/:event_id', ->
  @route 'help'
