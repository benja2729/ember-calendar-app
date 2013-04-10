define(['ember-data', 'App'], function(DS, App) {
  return App.Category = DS.Model.extend({
    event: DS.belongsTo('App.Event'),
    name: DS.attr('string')
  });
});
