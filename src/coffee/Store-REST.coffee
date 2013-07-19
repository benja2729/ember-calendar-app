
define [
  'App', 'ember-data'
], (App, DS) ->

  App.Store = DS.Store.extend
    revision: 12
    adapter: DS.RESTAdapter.reopen
      url: 'https://api.valpo.edu'
      namespace: 'eventPool2'
      # buildURL: (record, suffix) ->
      #   # The parameters don't matter too much atm
      #   @get('url')
