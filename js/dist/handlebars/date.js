define(['ember', 'moment'], function(Em, moment) {
  Em.Handlebars.registerBoundHelper('date', function(date) {
    var time;

    time = moment(date);
    return time.format('MMMM D, YYYY');
  });
  return Em;
});
