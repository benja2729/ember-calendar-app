
require 'ApplicationAdapter'
require 'models/Category'

App.Event = DS.Model.extend
  start: DS.attr 'date'
  end: DS.attr 'date'
  isAllDay: DS.attr 'boolean'
  title: DS.attr 'string'
  location: DS.attr 'string'
  description: DS.attr 'string'
  url: DS.attr 'string'
  categories: DS.hasMany 'category'
  isFeatured: Em.computed 'categories.@each', ->
    categories = @get 'categories'
    categories.anyBy 'id', '11'
