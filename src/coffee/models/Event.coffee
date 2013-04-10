
define [
  'App', 'ember-data'
  '../../fixtures', './Category'
], (App, DS, fixtures) ->

  Event = DS.Model.extend
    start: DS.attr 'date'
    end: DS.attr 'date'
    allDay: DS.attr 'boolean'
    title: DS.attr 'string'
    location: DS.attr 'string'
    description: DS.attr 'string'
    url: DS.attr 'string'
    categories: DS.hasMany 'App.Category'

  Event.FIXTURES = fixtures

  App.Event = Event
