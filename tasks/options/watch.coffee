module.exports =
  options:
    nospawn: true,
  coffee:
    files: ['<%= dirs.coffee %>/**/*.coffee']
    tasks: ['coffee:compile', 'neuter:compile']
  handlebars:
    files: ['<%= dirs.hbs %>/**/*.{handlebars,hbs}']
    tasks: ['emberTemplates:compile', 'neuter:compile']
  less:
    files: ['<%= dirs.less %>/**/*.less']
    tasks: ['less:compile']
  # test:
  #   files: ['packages/ember-model/tests/**/*.js'],
  #   tasks: ['jshint:development', 'build_test_runner_file'],
