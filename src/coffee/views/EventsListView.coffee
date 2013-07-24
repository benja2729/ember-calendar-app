
define ['ember', 'ValpoUtils', 'App', './ListView'], (Em, VU, App) ->

  EventsListView = App.ListView.extend
    # layout: Ember.Handlebars.compile("<div class='events-list-layout'>{{yield}}</div>")

    # Configurable Properties
    rowTemplateName: 'events/list-row'
    heightBinding: 'parentView.height'
    # height: 300
    rowHeight: 50

  App.EventsListView = EventsListView
