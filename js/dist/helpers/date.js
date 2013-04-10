define(['ember', 'lib/moment'], function(Em, moment) {
  Em.Handlebars.registerBoundHelper('date', function(date) {
    return (new Date(date)).getTime();
  });
  return Em;
});
