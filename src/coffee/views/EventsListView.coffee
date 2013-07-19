
define ['ember', 'ValpoUtils', 'App', './ListView'], (Em, VU, App) ->

  EventsListView = App.ListView.extend

    # Configurable Properties
    rowTemplateName: 'events/list-row'
    heightBinding: 'parentView.height'
    # height: 300
    rowHeight: 50

  App.EventsListView = EventsListView
