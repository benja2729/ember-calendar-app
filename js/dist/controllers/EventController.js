define(['App', 'ember', 'libs/moment'], function(App, Em, moment) {
  var Controller;

  Controller = Em.ObjectController.extend({
    closeModal: function() {
      return this.transitionToRoute('events');
    },
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
  return App.EventController = Controller;
});
