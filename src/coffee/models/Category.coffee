
define ['ember-data', 'App', 'Store-REST'], (DS, App) ->

  DS.RESTAdapter.configure 'plurals',
    category: 'categories'

  Category = DS.Model.extend
    # event: DS.belongsTo 'App.Event'
    name: DS.attr 'string'

  App.Category = Category