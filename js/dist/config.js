var require;

require = {
  baseUrl: 'js/dist',
  paths: {
    'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min', '../libs/jquery-1.9.1.min'],
    'ember': '../libs/ember',
    'ember-data': '../libs/ember-data',
    'moment': '../libs/moment'
  },
  shim: {
    'ember': {
      deps: ['jquery', '../libs/handlebars.runtime'],
      exports: 'Ember'
    },
    'ember-data': {
      deps: ['ember'],
      exports: 'DS'
    },
    'templates': ['ember']
  }
};
