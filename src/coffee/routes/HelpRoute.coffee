
App.HelpRoute = Em.Route.extend
  model: ->
    $.ajax
      url: 'http://hipsterjesus.com/api/'
      data:
        paras: 5
        type: "hipster-latin"
        html: true
