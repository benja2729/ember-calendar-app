
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

  shim:
    'ember':
      deps: [
        'jquery', 'libs/handlebars.runtime'   #'libs/handlebars'

        # jQuery plugins need to be included here so they are attached
        # to the Ember namespace
        'libs/bootstrap-transition'
      ]
      exports: 'Ember'

    'ember-data':
      deps: ['ember']
      exports: 'DS'

    'templates':
      deps: [
        'ember'

        # Handlebars helpers
        'handlebars/date', 'handlebars/time', 'handlebars/showdown'
      ]
      exports: 'Ember.TEMPLATES'

    'libs/bootstrap-transition':
      deps: ['jquery']
      exports: 'jQuery.support.transition'

    'libs/moment':
      exports: 'moment'

    'showdown':
      exports: 'Showdown'

# Disable Emberjs Prototype Extensions
# This may cause the r.js optimizer to fail
(window.ENV = {}).EXTEND_PROTOTYPES = false
