
define [
  'App', 'ember-data'
  './Category'
], (App, DS) ->

  Event = DS.Model.extend
    start: DS.attr 'date'
    end: DS.attr 'date'
    allDay: DS.attr 'boolean'
    title: DS.attr 'string'
    location: DS.attr 'string'
    description: DS.attr 'string'
    url: DS.attr 'string'
    categories: DS.hasMany 'App.Category'

  App.Event = Event
