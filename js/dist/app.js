var __hasProp = {}.hasOwnProperty;

define(['ember', 'ember-data', 'templates'], function(Em, DS) {
  var App;

  App = Em.Application.create({
    LOG_TRANSITIONS: true
  });
  DS.FixtureAdapter.reopen({
    queryFixtures: function(fixtures, query, type) {
      var events;

      events = Em.A(fixtures).filter(function(item, index) {
        var key, value;

        for (key in query) {
          if (!__hasProp.call(query, key)) continue;
          value = query[key];
          if (item[key] === value) {
            return false;
          }
        }
        return true;
      });
      console.log(events.length);
      return events;
    }
  });
  App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter'
  });
  return window.App = App;
});
