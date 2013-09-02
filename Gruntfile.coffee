config = (name) -> require "./tasks/options/#{name}"

module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    bwr: grunt.file.readJSON 'bower.json'
    dirs:
      bower: 'bower_components'
      coffee: 'src/coffee'
      less: 'src/less'
      hbs: 'src/handlebars'
      temp: 'src/compiled-js'
      js: 'assets/js'
      css: 'assets/css'

    banner: '''
/*!
 * @name: <%= pkg.name %>
 * @version: <%= pkg.version %>
 * @author: <%= pkg.author %>
 * @repository: <%= pkg.repository.url %>
 * @license: <%= pkg.license %>
 */\n'''

    less: config 'less'
    strip: config 'strip'
    watch: config 'watch'
    jshint: config 'jshint'
    neuter: config 'neuter'
    coffee: config 'coffee'
    uglify: config 'uglify'
    emberTemplates: config 'emberTemplates'


  require('matchdep').filterDev('grunt-*').forEach grunt.loadNpmTasks

  grunt.registerTask 'compile', [
    'coffee:compile'
    'emberTemplates:compile'
    'neuter:compile'
    'less:compile'
  ]

  grunt.registerTask 'develop', [
    'compile'
    #'jshint:develop'
    'watch'
  ]

  grunt.registerTask 'production', [
    'compile'
    #'jshint:all'   # Some errors are incompatible with compiled CoffeeScript
    'strip:production'
    'uglify:production'
  ]
