
define ['App', 'ember'], (App, Em) ->

  resolvedPaths = (options) ->
    types = options.options.types.slice(1)
    data = options.options.data

    console.log 'resolvedPaths: ', options

    Em.Router.resolveParams options.context, options.params,
      types: types
      data: data

  fullRouteName = (router, name) ->
    name = name + ".index"  unless router.hasRoute(name)
    name

  args = (linkView, router, route) ->
    passedRouteName = route or linkView.namedRoute
    routeName = undefined
    routeName = fullRouteName(router, passedRouteName)
    Ember.assert "The route " + passedRouteName + " was not found", router.hasRoute(routeName)
    ret = [routeName]
    ret.concat resolvedPaths(linkView.parameters)

  linkClass = Em.LinkView.extend
    init: ->
      @_super()
      console.log 'linkClass#init: ', Em.get(this, 'parameters')

    click: (event) ->
      return true unless Em.ViewUtils.isSimpleClick(event)

      event.preventDefault()
      event.stopPropagation() if @bubbles is false
      router = @get("router")

      console.log 'linkClass#click: ', args(this, router)
      console.log Em.get(this, 'parameters')

      if @get("replace")
        router.replaceWith.apply router, args(this, router)
      else
        router.transitionTo.apply router, args(this, router)

  Em.Handlebars.registerHelper "linkClass", (name) ->
    options = [].slice.call(arguments, -1)[0]
    params = [].slice.call(arguments, 1, -1)

    hash = options.hash
    hash.namedRoute = name
    hash.currentWhen = hash.currentWhen or name
    hash.parameters =
      context: this
      options: options
      params: params

    Ember.Handlebars.helpers.view.call this, linkClass, options
  
  View = Em.View.extend()

  App.MonthView = View