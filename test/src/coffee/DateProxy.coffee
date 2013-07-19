
require ['ValpoUtils', 'ValpoUtils/DateProxy', 'qunit'], (VU, DateProxy, QUnit) ->
  QUnit.start()

  isChainable = (object) ->
    ok VU.DateWrapper.detect(object), 'Returns DateProxy object for chaining'

  matchesComputedProperty = (object, computed, getter) ->
    comp = object.get computed
    def = object.content['get' + getter]()
    ok comp is def, "Change is reflected in the '#{computed}' computed property"

  module 'DateProxy'
  test '@startOf: Year', ->
    date = DateProxy.create content: new Date(2013, 6, 15)

    ret = date.startOf 'year'
    deepEqual new Date(2013, 0, 1), date.content, 'Year resets properly and cascades down to millisecond'
    matchesComputedProperty ret, 'year', 'FullYear'
    isChainable ret

  test '@startOf: Month', ->
    date = DateProxy.create content: new Date(2013, 6, 15)

    ret = date.startOf 'month'
    deepEqual new Date(2013, 6, 1), date.content, 'Month resets properly and cascades down to millisecond'
    matchesComputedProperty ret, 'month', 'Month'
    isChainable ret

  test '@startOf: Day', ->
    date = DateProxy.create content: new Date(2013, 6, 15, 12)

    ret = date.startOf 'day'
    deepEqual new Date(2013, 6, 15, 0), date.content, 'Day resets properly and cascades down to millisecond'
    matchesComputedProperty ret, 'date', 'Date'
    isChainable ret

  test 'duration', ->
