define(['ember', 'App', 'moment', 'models/Event', 'handlebars/date', 'handlebars/time'], function(Em, App, moment) {
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
  return App.EventController = Em.ObjectController.extend({
    startDate: Em.computed(function() {
      return moment(this.get('start'));
    }).property('start'),
    endDate: Em.computed(function() {
      return moment(this.get('end'));
    }).property('end'),
    isMultiDay: Em.computed(function() {
      var end, start;

      start = this.get('startDate').clone().startOf('day');
      end = this.get('endDate').clone().startOf('day');
      if (start.diff(end) < 0) {
        return true;
      } else {
        return false;
      }
    }).property('startDate', 'endDate')
  });
});
