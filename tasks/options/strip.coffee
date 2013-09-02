module.exports =
  production:
    options:
      inline: true
      nodes : ['Ember.assert', 'console']
    src: '<%= dirs.js %>/<%= pkg.name %>.js'
