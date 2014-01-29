
require 'routes/ApplicationRoute'
require 'routes/LoadingRoute'
require 'routes/FiltersRoute'
require 'routes/DayRoute'
require 'routes/MonthRoute'
require 'routes/EventRoute'
require 'routes/HelpRoute'

App.Router.map ->
  @resource 'filters', path: ':categories', ->
    @resource 'day', path: 'day/:day', ->
    @resource 'month', path: 'month/:month', ->
  @resource 'event', path: 'event/:event_id', ->
  @route 'help'

# App.Router.reopen
#   location: 'none'
