module.exports =
  options:
    preserveComments: 'some'
  production:
    options:
      banner: '<%= banner %>'
    src: ['<%= dirs.js %>/<%= pkg.name %>.js']
    dest: '<%= dirs.js %>/<%= pkg.name %>.js'
  lib:
    src: [
      '<%= dirs.bower %>/handlebars/handlebars.runtime.js'
      '<%= dirs.bower %>/ember/ember.js'
      '<%= dirs.bower %>/ember-model/ember-model.js'
    ]
    dest: '<%= dirs.js %>/lib.js'
