module.exports =
  compile:
    options:
      basePath: '<%= dirs.temp %>/'
    src: ['<%= dirs.temp %>/main.js']
    dest: '<%= dirs.js %>/<%= pkg.name %>.js'
  libs:
    options:
      template: '{%= src %}'
      basePath: '<%= dirs.js %>/libs/'
    src: ['<%= dirs.js %>/bundle/calendar.bundle.js']
    dest: '<%= dirs.js %>/calendar.pkg.js'
  # libs:
  #   options:
  #     template: '{%= src %}'
  #     basePath: '<%= dirs.js %>/libs/'
  #     skipFiles: ['ember.min.js', 'moment.min.js', 'showdown.min.js', 'ember-data.min.js', 'twix.min.js']
  #   expand: true
  #   cwd: '<%= dirs.js %>/bundle'
  #   src: ['*.bundle.js']
  #   dest: '<%= dirs.js %>'
  #   ext: '.pkg.js'
