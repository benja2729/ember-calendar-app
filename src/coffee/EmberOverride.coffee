
Em.Route.reopen App.DataUtilMixin,
  enter: ->
    # To add 'popAppState' funcitonality
    routeName = @get 'routeName'
    if /^\w+$/.test(routeName) and routeName isnt "loading" and routeName isnt 'application'
      @controllerFor('application').set 'currentResource', routeName
