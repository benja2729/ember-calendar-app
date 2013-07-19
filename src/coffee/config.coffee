
# Unfortunately, configurations here must be duplicated in the Gruntfile
# Or figure out a way to use path and shim along with mainGonfigFile in grunt

require =
  baseUrl: 'js/dist'

  paths:
    'jquery': [
      '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min'   # Apparently can't use extension... :\
      '../libs/jquery-1.9.1.min'                                 # Fallback asset
    ]
    'libs': '../libs'
    'ember': '../libs/ember'
    'ember-data': '../libs/ember-data'
    'moment': '../libs/moment'

    # QUnit only necessary on dev build (non-optimized)
    'test': '../test'
    'qunit': 'http://code.jquery.com/qunit/qunit-1.11.0'

  shim:
    'ember':
      deps: ['jquery', 'libs/handlebars'] #.runtime']
      exports: 'Ember'

    'ember-data':
      deps: ['ember']
      exports: 'DS'

    'templates':
      deps: [
        'ember'

        # Handlebars helpers
        'handlebars/date', 'handlebars/time'
        'handlebars/showdown', 'handlebars/moment'
      ]
      exports: 'Ember.TEMPLATES'

    'libs/bootstrap-transition':
      deps: ['jquery']
      exports: 'jQuery.support.transition'

    'libs/showdown':
      exports: 'Showdown'

    'qunit':
      deps: ['jquery']
      exports: 'QUnit'
      init: ($) ->
        q = @QUnit
        q.config.autostart = false
        q.config.autorun = false
        q.begin -> console.log 'QUnit begin'
        q.done -> console.log 'QUnit done'
        q.load()

# Disable Emberjs Prototype Extensions
# This may cause the r.js optimizer to fail
(window.ENV = {}).EXTEND_PROTOTYPES = false
