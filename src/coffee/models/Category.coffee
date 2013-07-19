
define ['ember-data', 'App'], (DS, App) ->

  DS.RESTAdapter.configure 'plurals',
    category: 'categories'

  App.Category = DS.Model.extend
    # event: DS.belongsTo 'App.Event'
    name: DS.attr 'string'