
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
  range: Em.computed 'start', 'end', 'isAllDay', ->
    isAllDay = @get 'isAllDay'
    format = 'MM/DD/YYYY'

    if isAllDay
      start = moment(@get 'start', format)
      end = moment(@get 'end', format)
    else
      start = moment(@get 'start')
      end = moment(@get 'end')

    start.twix end, isAllDay

  isMultiDay: Em.computed 'range', ->
    range = @get 'range'
    range.countInner('days') isnt 0

  isFeatured: Em.computed 'categories.@each', ->
    categories = @get 'categories'
    categories.anyBy 'id', '11'
