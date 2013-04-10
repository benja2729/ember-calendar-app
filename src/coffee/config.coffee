
require =
  baseUrl: 'js/dist'

  paths:
    'jquery': [
      '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min'   # Apparently can't use extension... :\
      '../libs/jquery-1.9.1.min'                                 # Fallback asset
    ]
    'ember': '../libs/ember'
    'ember-data': '../libs/ember-data'
    'moment': '../libs/moment'

  shim:
    'ember':
      deps: ['jquery', '../libs/handlebars.runtime']
      exports: 'Ember'

    'ember-data':
      deps: ['ember']
      exports: 'DS'

    'templates': ['ember']

# Disable Emberjs Prototype Extensions
# This may cause the r.js optimizer to fail
# (window.ENV = {}).EXTEND_PROTOTYPES = false
