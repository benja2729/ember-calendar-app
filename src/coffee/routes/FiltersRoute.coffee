
get = Em.get
set = Em.set

require 'controllers/FiltersController'
require 'views/FiltersView'

format = 'MM-DD-YYYY'

App.FiltersRoute = Em.Route.extend
  model: (params) ->
    ret = Em.Object.create({})
    ret.setProperties
      start: moment(params.start, format).unix()
      end: moment(params.end, format).unix()
    ret

  serialize: (model, params) ->
    ret = {}
    ret['start'] = moment.unix(get model, 'start').format format
    ret['end'] = moment.unix(get model, 'end').format format
    ret