'use strict'
path = require('path')
lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet

folderMount = (connect, point) ->
  connect.static(path.resolve(point))

module.exports = (grunt) ->
  
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
  
    clean:
      src: ['public/compiled-js/']

    # minispade:
    #   options:
    #     renameRequire: true
    #     useStrict: false
    #     prefixToRemove: 'public/compiled-js/'
    #   files:
    #     src: ['public/compiled-js/**/*.js']
    #     dest: 'public/dist/app.js'

    coffee:
      options:
        bare: true
      glob_to_multiple:
        expand: true
        cwd: 'public/coffee/'
        src: ['**/*.coffee']
        dest: 'public/compiled-js'
        ext: '.js'

    concat:
      js:
        src: "public/compiled-js/**/*.js"
        dest: "public/dist/app.js"

    less:
      dist:
        files:
          'public/dist/appcss.css': 'public/less/**/*.less'
        options:
          paths: ['app/less', 'components/bootstrap/less']
          yuicompress: true

    # ember_templates:
    #   compile:
    #     options:
    #       templateName: (sourceFile) ->
    #         return sourceFile.replace(/public\/handlebars\//,'')
    #     files:
    #       "public/dist/apptemplates.js": "public/handlebars/**/*.{handlebars, hbs}"
    
    regarde:
      coffee:
        files: 'public/coffee/**/*.coffee'
        # tasks: ['clean', 'coffee', 'minispade', 'livereload', 'regarde']
        tasks: ['clean', 'coffee', 'concat:js', 'livereload', 'regarde']
      # handlebars:
      #   files: 'public/handlebars/**/*.{handlebars, hbs}'
      #   tasks: ['ember_templates', 'livereload', 'regarde']

  grunt.loadNpmTasks('grunt-contrib-livereload')
  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-ember-templates')
  grunt.loadNpmTasks('grunt-regarde')
  # grunt.loadNpmTasks('grunt-minispade')

  grunt.registerTask('vanilla', [
                                        'livereload-start',
                                        # 'ember_templates',
                                        'concat:css',
                                        # 'minispade'
                                        'regarde'             ])
  
  grunt.registerTask('4south', [
                                        'livereload-start',
                                        # 'ember_templates',
                                        'clean',
                                        'less'
                                        'coffee',
                                        # 'minispade'
                                        'concat'
                                        'regarde'             ])

  grunt.registerTask('noreload', [
                                        # 'ember_templates',
                                        'clean',
                                        'less'
                                        'coffee'              ])
                                        # 'minispade'           ])
