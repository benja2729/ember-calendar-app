define(['ember', 'moment'], function(Em, moment) {
  Em.Handlebars.registerBoundHelper('time', function(date) {
    var clone;

    date = moment(date);
    clone = date.clone();
    if (clone.startOf('day').diff(date) === 0) {
      return 'midnight';
    } else if (clone.hour(12).diff(date) === 0) {
      return 'noon';
    } else {
      return date.format('hh:mm a');
    }
  });
  return Em;
});
