
require 'views/ListView'

App.EventsListView = App.ListView.extend
  init: ->
    window.ListView = this
    @_super.apply this, arguments
  # layout: Ember.Handlebars.compile("<div class='events-list-layout'>{{yield}}</div>")

  # Configurable Properties
  rowTemplateName: 'events/list-row'
  # heightBinding: 'parentView.height'
  height: 600
  rowHeight: 65
