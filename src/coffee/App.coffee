
define ['ember', 'Router', 'templates'], (Em, Router) ->

  App = Em.Application.create
    LOG_TRANSITIONS: true
    isReady: false

  App.Router.map Router

  App.ready = -> App.set 'isReady', true

  window.App = App