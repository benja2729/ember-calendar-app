
define ['ember', 'ValpoUtils', 'App'], (Em, VU, App) ->

  EventsView = Em.View.extend

    # Used for EventsListView to fill container (this)
    height: Em.computed( (property, value) ->
      if value? then value
      else 300
    )
    didInsertElement: ->
      # Do something with height

  App.EventsView = EventsView
