
define ['ember', 'ember-data', 'templates'], (Em, DS) ->

  App = Em.Application.create
    LOG_TRANSITIONS: true
    isReady: false

  DS.FixtureAdapter.reopen
    queryFixtures: (fixtures, query, type) ->
      events = Em.A(fixtures).filter (item, index) ->
        for own key, value of query
          if item[key] is value then return false
        true

      console.log events.length
        
      events

  App.Store = DS.Store.extend
    revision: 12
    adapter: 'DS.FixtureAdapter'

  App.ready = -> App.set 'isReady', true

  window.App = App