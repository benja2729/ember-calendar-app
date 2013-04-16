define(['ember', 'libs/showdown'], function(Em, showdown) {
  Em.Handlebars.registerBoundHelper('showdown', function(text) {
    var e, result;

    try {
      result = (new showdown.converter()).makeHtml(text);
      return new Em.Handlebars.SafeString(result);
    } catch (_error) {
      e = _error;
      return 'Invalid input text';
    }
  });
  return Em;
});
