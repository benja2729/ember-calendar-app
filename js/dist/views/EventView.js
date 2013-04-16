define(['App', 'ember', 'mixins/ModalMixin'], function(App, Em, ModalMixin) {
  var View;

  View = Em.View.extend(ModalMixin);
  return App.EventView = View;
});
