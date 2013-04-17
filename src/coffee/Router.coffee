
###
  This module is slightly unconventional in comparison to my
  other modules in this app.

  Since the Router definition is the backbone of the entire
  Ember.js system, if requirejs decided to load and execute
  this definition at the wrong time the app's routes wouldn't
  be recognized.

  This is loaded before the "App" module, but executed right after
  the App is created inside of the "App" module.
###

define [], ->
  
  () ->
    @resource 'month', ->
      @resource 'events', ->
        @resource 'event', path: ':event_id'
