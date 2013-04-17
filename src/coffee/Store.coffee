
define [
  'App', 'ember-data', 'adapters/VUAdapter'
], (App, DS, VUAdapter) ->

  App.Store = DS.Store.extend
    revision: 12
    adapter: VUAdapter
