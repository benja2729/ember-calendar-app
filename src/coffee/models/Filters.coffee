
define ['App', 'ember', 'ValpoUtils'], (App, Em, VU) ->

  Filters = Em.Object.extend
    start: Em.required 'Date.time'
    end: Em.required 'Date.time'
    categories: Em.required 'VU.BitObject'

  App.Filters = Filters
