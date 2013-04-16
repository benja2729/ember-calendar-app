define(['ember', 'App', 'models/Event', 'controllers/EventController', 'views/EventView'], function(Em, App) {
  App.Router.map(function() {
    return this.resource('events', function() {
      return this.resource('event', {
        path: ':event_id'
      });
    });
  });
  App.EventsRoute = Em.Route.extend({
    model: function(params) {
      return App.Event.find();
    }
  });
  return App.EventsController = Em.ArrayController.extend({
    content: null,
    filteredEvents: Em.computed(function() {
      return Em.A(this.get('content').slice(0, 10));
    }).property('content@each')
  });
});
