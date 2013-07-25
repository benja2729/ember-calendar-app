
define ['ember', 'ValpoUtils', 'App', './FilterPaneView'], (Em, VU, App) ->

  View = VU.SidePaneView.extend
    classNames: ['event-detail-pane']

  App.EventView = View