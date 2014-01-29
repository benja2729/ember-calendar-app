module.exports =
  production:
    options:
      inline: true
      nodes : ['Ember.assert', 'console', 'require']
    src: '<%= dirs.js %>/<%= pkg.name %>.js'
