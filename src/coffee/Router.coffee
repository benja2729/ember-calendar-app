
require 'routes/ApplicationRoute'
require 'routes/FiltersRoute'
require 'routes/EventsRoute'
require 'routes/EventRoute'


App.Router.map ->
  @resource 'filters', path: ':categories', ->

