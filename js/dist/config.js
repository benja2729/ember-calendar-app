var require;

require = {
  baseUrl: 'js/dist',
  paths: {
    'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min', '../libs/jquery-1.9.1.min'],
    'libs': '../libs',
    'ember': '../libs/ember',
    'ember-data': '../libs/ember-data'
  },
  shim: {
    'ember': {
      deps: ['jquery', 'libs/handlebars.runtime', 'libs/bootstrap-transition'],
      exports: 'Ember'
    },
    'ember-data': {
      deps: ['ember'],
      exports: 'DS'
    },
    'templates': {
      deps: ['ember', 'handlebars/date', 'handlebars/time', 'handlebars/showdown'],
      exports: 'Ember.TEMPLATES'
    },
    'libs/bootstrap-transition': {
      deps: ['jquery'],
      exports: 'jQuery.support.transition'
    },
    'libs/moment': {
      exports: 'moment'
    },
    'showdown': {
      exports: 'Showdown'
    }
  }
};

(window.ENV = {}).EXTEND_PROTOTYPES = false;
