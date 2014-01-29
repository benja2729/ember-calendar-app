
App.EventsFilterController = Em.ArrayController.extend App.EventsFilterMixin, App.DataUtilMixin,
  needs: ['application', 'filters']
  filtersBinding: 'controllers.filters'
  todayBinding: 'App.today'
  todayPath: Em.computed 'today', ->
    today = @get 'today'
    format = @container.lookup('route:day').get 'format'
    moment(today).format format

  sortProperties: ['start']
  sortAscending: true
  sortFunction: (a, b) -> +a - +b

  actions:
    error: (e) -> console.warn e
