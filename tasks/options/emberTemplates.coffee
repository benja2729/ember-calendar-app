
module.exports =
  compile:
    options:
      templateBasePath: '<%= dirs.hbs %>'
      templateName: (sourceFile) ->
        #sourceFile.replace(/src\/handlebars\//,'').replace '.', '/'
        sourceFile.replace(/\/?/,'').replace '.', '/'
    files:
      '<%= dirs.temp %>/templates.js': '<%= dirs.hbs %>/**/*.{handlebars,hbs}'