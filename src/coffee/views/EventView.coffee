
define ['App', 'ember', 'mixins/ModalMixin'], (App, Em, ModalMixin) ->

  View = Em.View.extend ModalMixin

  App.EventView = View