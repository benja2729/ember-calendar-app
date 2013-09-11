module.exports =
  options:
    filepathTransform: (filepath) ->
      ret = 'src/compiled-js/' + filepath
      console.log ret
      ret
  compile:
    src: '<%= dirs.temp %>/main.js'
    dest: 'assets/js/<%= pkg.name %>.js'
