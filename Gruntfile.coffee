'use strict'
path = require('path')
lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet

folderMount = (connect, point) ->
  connect.static(path.resolve(point))

module.exports = (grunt) ->
  
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
  
    clean:
      src: ['src/compiled-js/', 'js/dist/']

    coffee:
      options:
        bare: true    # Going to be wrapping in define calls anyway
      test:
        expand: true
        cwd: 'test/src/coffee'
        src: ['**/*.coffee']
        dest: 'js/test'
        ext: '.js'
      dev:
        expand: true
        cwd: 'src/coffee/'
        src: ['**/*.coffee']
        dest: 'js/dist'
        ext: '.js'
      build:
        expand: true
        cwd: 'src/coffee/'
        src: ['**/*.coffee']
        dest: 'src/compiled-js'
        ext: '.js'

    requirejs:
      options:
        # Use mainConfigFile to reuse shims
        mainConfigFile: 'src/compiled-js/config.js'

        # The following configurations overwrite the mainConfigFile
        baseUrl: 'src/compiled-js'
        paths:
          'libs': '../../js/libs'
          'jquery': '../../js/libs/jquery-1.9.1.min'
          'ember': '../../js/libs/ember'
          'ember-data': '../../js/libs/ember-data'
          'moment': '../../js/libs/moment'
        shim:
          'ember':
            deps: ['jquery', 'libs/handlebars']   # .runtime']
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

          'libs/list-view':
            deps: ['ember']

          'libs/bootstrap-transition':
            deps: ['jquery']
            exports: 'jQuery.support.transition'

          'libs/showdown':
            exports: 'Showdown'

        name: 'calendar'
        include: ['libs/almond']
        insertRequire: ['calendar']
        out: 'js/calendar.js'
      dev:
        options:
          optimize: 'none'
          generateSourceMaps: true
          preserveLicenseComments: false
      build:
        options:
          optimize: 'uglify'
          uglify: toplevel: false

    less:
      dist:
        files:
          'css/bootstrap.css': 'src/less/bootstrap.less'
          'css/calendar.css': 'src/less/calendar.less'
        options:
          paths: ['src/less/**', 'components/bootstrap/less']
          yuicompress: true

    emberTemplates:
      options:
        templateName: (sourceFile) ->
          sourceFile.replace(/src\/handlebars\//,'').replace '.', '/'
      dev:
        files:
          'js/dist/templates.js': 'src/handlebars/**/*.{handlebars,hbs}'
      build:
        files:
          "src/compiled-js/templates.js": "src/handlebars/**/*.{handlebars,hbs}"

    regarde:
      html:
        files: '**/*.html'
        tasks: ['livereload', 'regarde']
      coffee:
        files: ['src/coffee/**/*.coffee', 'test/src/coffee/**/*.coffee']
        tasks: ['clean', 'coffee:dev', 'coffee:test', 'emberTemplates:dev', 'livereload', 'regarde']
      handlebars:
        files: 'src/handlebars/**/*.{handlebars,hbs}'
        tasks: ['emberTemplates:dev', 'livereload', 'regarde']
      less:
        files: ['src/less/**/*.less']
        tasks: ['less', 'livereload', 'regarde']

  grunt.loadNpmTasks('grunt-contrib-livereload')
  grunt.loadNpmTasks('grunt-contrib-requirejs')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-ember-templates')
  grunt.loadNpmTasks('grunt-regarde')
  # grunt.loadNpmTasks('grunt-minispade')

  grunt.registerTask 'build', [
    'less'
    'clean'
    'coffee:build'
    'emberTemplates:build'
    'requirejs:build'
  ]

  grunt.registerTask 'build:dev', [
    'less'
    'clean'
    'coffee:build'
    'emberTemplates:build'
    'requirejs:dev'
  ]

  grunt.registerTask 'dev', [
    'less'
    'clean'
    'coffee:dev'
    'emberTemplates:dev'
  ]

  grunt.registerTask 'dev:regarde',[
    'dev'
    'regarde'
  ]

  grunt.registerTask '4south', [
    'livereload-start'
    'dev:regarde'
  ]

  grunt.registerTask 'test', [
    'livereload-start'
    'clean'
    'coffee:dev'
    'coffee:test'
    'regarde:coffee'
  ]
