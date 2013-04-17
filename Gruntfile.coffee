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
      dev:
        options:
          optimize: 'none'
          generateSourceMaps: true
          preserveLicenseComments: false
          name: 'libs/almond'
          include: ['calendar']
          insertRequire: ['calendar']
          out: 'js/dist/calendar.js'
      build:
        options:
          optimize: 'uglify'
          name: 'libs/almond'
          include: ['calendar']
          insertRequire: ['calendar']
          out: 'js/dist/calendar.js'

    less:
      dist:
        files:
          'css/bootstrap.css': 'src/less/bootstrap.less'
          'css/calendar.css': 'src/less/calendar.less'
        options:
          paths: ['src/less/**', 'components/bootstrap/less']
          yuicompress: true

    ember_templates:
      options:
        templateName: (sourceFile) ->
          return sourceFile.replace(/src\/handlebars\//,'')
      dev:
        files:
          'js/dist/templates.js': 'src/handlebars/**/*.{handlebars,hbs}'
      build:
        files:
          "src/compiled-js/templates.js": "src/handlebars/**/*.{handlebars,hbs}"

    regarde:
      html:
        files: '*.html'
        tasks: ['livereload', 'regarde']
      coffee:
        files: 'src/coffee/**/*.coffee'
        tasks: ['clean', 'coffee:dev', 'ember_templates:dev', 'livereload', 'regarde']
      handlebars:
        files: 'src/handlebars/**/*.{handlebars,hbs}'
        tasks: ['ember_templates:dev', 'livereload', 'regarde']
      less:
        files: ['src/less/**/*.less']
        tasks: ['less', 'livereload', 'regarde']

  grunt.loadNpmTasks('grunt-contrib-livereload')
  grunt.loadNpmTasks('grunt-contrib-requirejs')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-ember-templates')
  grunt.loadNpmTasks('grunt-regarde')
  # grunt.loadNpmTasks('grunt-minispade')

  grunt.registerTask('4south', [
                                        'livereload-start',
                                        'less'
                                        'clean',
                                        'coffee:dev',
                                        'ember_templates:dev',
                                        # 'concat:js'
                                        'regarde'             ])

  grunt.registerTask('build', [
    'less'
    'clean'
    'coffee:build'
    'ember_templates:build'
    'requirejs:build'
  ])

  grunt.registerTask('noreload', [
                                        # 'ember_templates',
                                        'clean',
                                        'less'
                                        'coffee'              ])
                                        # 'minispade'           ])
