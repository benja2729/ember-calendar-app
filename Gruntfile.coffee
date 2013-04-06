'use strict'
path = require('path')
lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet

folderMount = (connect, point) ->
  connect.static(path.resolve(point))

module.exports = (grunt) ->
  
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
  
    clean:
      src: ['src/compiled-js/']

    # minispade:
    #   options:
    #     renameRequire: true
    #     useStrict: false
    #     prefixToRemove: 'src/compiled-js/'
    #   files:
    #     src: ['src/compiled-js/**/*.js']
    #     dest: 'src/dist/app.js'

    coffee:
      options:
        bare: true    # Going to be wrapping in define calls anyway
      glob_to_multiple:
        expand: true
        cwd: 'src/coffee/'
        src: ['**/*.coffee']
        dest: 'src/compiled-js'
        ext: '.js'

    # Concat is just filling-in for requirejs
    concat:
      js:
        src: ['src/compiled-js/**/*.js']
        dest: 'js/dist/app.js'

    less:
      dist:
        files:
          'css/app.css': 'src/less/app.less'
        options:
          paths: ['src/less/**', 'components/bootstrap/less']
          yuicompress: true

    ember_templates:
      compile:
        options:
          templateName: (sourceFile) ->
            return sourceFile.replace(/src\/handlebars\//,'')
        files:
          "src/compiled-js/apptemplates.js": "src/handlebars/**/*.{handlebars,hbs}"
    
    regarde:
      coffee:
        files: 'src/coffee/**/*.coffee'
        # tasks: ['clean', 'coffee', 'minispade', 'livereload', 'regarde']
        tasks: ['clean', 'coffee', 'concat:js', 'livereload', 'regarde']
      handlebars:
        files: 'src/handlebars/**/*.{handlebars,hbs}'
        tasks: ['ember_templates', 'concat:js', 'livereload', 'regarde']
      less:
        files: ['src/less/**/app.less']
        tasks: ['less', 'livereload', 'regarde']

  grunt.loadNpmTasks('grunt-contrib-livereload')
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
                                        'coffee',
                                        'ember_templates',
                                        # 'minispade'
                                        'concat:js'
                                        'regarde'             ])

  grunt.registerTask('noreload', [
                                        # 'ember_templates',
                                        'clean',
                                        'less'
                                        'coffee'              ])
                                        # 'minispade'           ])
