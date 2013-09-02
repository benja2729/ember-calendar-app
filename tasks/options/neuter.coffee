module.exports =
  options:
    filepathTransform: (filepath) -> 'src/compiled-js/' + filepath
  compile:
    src: '<%= dirs.temp %>/main.js'
    dest: 'assets/js/<%= pkg.name %>.js'
