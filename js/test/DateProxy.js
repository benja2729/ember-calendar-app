require(['ValpoUtils', 'ValpoUtils/DateProxy', 'qunit'], function(VU, DateProxy, QUnit) {
  var isChainable, matchesComputedProperty;

  QUnit.start();
  isChainable = function(object) {
    return ok(VU.DateWrapper.detect(object), 'Returns DateProxy object for chaining');
  };
  matchesComputedProperty = function(object, computed, getter) {
    var comp, def;

    comp = object.get(computed);
    def = object.content['get' + getter]();
    return ok(comp === def, "Change is reflected in the '" + computed + "' computed property");
  };
  module('DateProxy');
  test('@startOf: Year', function() {
    var date, ret;

    date = DateProxy.create({
      content: new Date(2013, 6, 15)
    });
    ret = date.startOf('year');
    deepEqual(new Date(2013, 0, 1), date.content, 'Year resets properly and cascades down to millisecond');
    matchesComputedProperty(ret, 'year', 'FullYear');
    return isChainable(ret);
  });
  test('@startOf: Month', function() {
    var date, ret;

    date = DateProxy.create({
      content: new Date(2013, 6, 15)
    });
    ret = date.startOf('month');
    deepEqual(new Date(2013, 6, 1), date.content, 'Month resets properly and cascades down to millisecond');
    matchesComputedProperty(ret, 'month', 'Month');
    return isChainable(ret);
  });
  test('@startOf: Day', function() {
    var date, ret;

    date = DateProxy.create({
      content: new Date(2013, 6, 15, 12)
    });
    ret = date.startOf('day');
    deepEqual(new Date(2013, 6, 15, 0), date.content, 'Day resets properly and cascades down to millisecond');
    matchesComputedProperty(ret, 'date', 'Date');
    return isChainable(ret);
  });
  return test('duration', function() {});
});
