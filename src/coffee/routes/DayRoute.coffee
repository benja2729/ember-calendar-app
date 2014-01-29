
require 'models/Event'
require 'controllers/DayController'
require 'views/DayView'
require 'routes/DateRangeRoute'

App.DayRoute = App.DateRangeRoute.extend
  format: 'YYYY-MM-DD'
  formatDefault: 'today'

  setupController: (controller, model) ->
    currentDay = model.get 'currentDay'
    app = @controllerFor('application')
    app.set 'currentDay', currentDay
    @_super controller, model
