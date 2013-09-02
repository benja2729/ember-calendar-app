files = ['<%= dirs.temp %>/**/*.js']

module.exports =
  options:
    jshintrc: '.jshintrc'
  all: files

  ###
    in development mode, jshint violations will allow
    tasks to continue but will output a warning in
    the terminal.
  ###
  develop:
    options:
      force: true
    files:
      src: files
