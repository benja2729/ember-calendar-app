
module.exports =
  options:
    bare: true
  compile:
    expand: true
    cwd: '<%= dirs.coffee %>'
    src: ['**/*.coffee']
    dest: '<%= dirs.temp %>'
    ext: '.js'