
require 'models/Event'
require 'controllers/MonthController'
require 'views/MonthView'
require 'routes/DateRangeRoute'

App.MonthRoute = App.DateRangeRoute.extend
  format: 'YYYY-MM'
  formatDefault: 'current'
