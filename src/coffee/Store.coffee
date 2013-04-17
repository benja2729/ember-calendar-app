
define [
  'App', 'ember-data'
], (App, DS) ->

  App.Store = DS.Store.extend
    revision: 12
    adapter: DS.BasicAdapter
