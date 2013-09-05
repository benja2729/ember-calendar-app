
require 'Category'

DS.RESTAdapter.registerTransform 'unixDate',
  serialize: (value) -> value.toString()
  deserialize: (value) -> moment(value).unix()

# DS.RESTAdapter.registerTransform 'binBool',
#   serialize: (value) -> if value then 1 else 0
#   deserialize: (value) -> value is 1

# DS.RESTAdapter.map 'App.Event',
#   isAllDay: key: 'allDay'

App.Event = DS.Model.extend Em.SortableMixin,
  start: DS.attr 'unixDate'
  end: DS.attr 'unixDate'
  isAllDay: DS.attr 'boolean'   # DS.attr 'binBool'
  title: DS.attr 'string'
  location: DS.attr 'string'
  description: DS.attr 'string'
  url: DS.attr 'string'
  categories: DS.hasMany 'App.Category'
