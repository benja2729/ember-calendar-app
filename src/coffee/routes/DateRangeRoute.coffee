
App.DateRangeRoute = Em.Route.extend App.DateUtilMixin,
  format: Em.required String          # 'MM-DD-YYYY'
  formatDefault: Em.required String   # 'today'
  rangeSlug: Em.computed '_debugContainerKey', ->
    @get('_debugContainerKey').decamelize().replace /^route:([a-z]+).*$/, '$1' 
  todayBinding: 'App.today'

  model: (params) ->
    slug = @get 'rangeSlug'
    formatDefault = @get 'formatDefault'
    params[slug] ?= formatDefault
    @loadRange slug, if params[slug] is formatDefault then new Date()
    else params[slug]

  afterModel: (model, transition) ->
    if moment.isMoment(model.get 'currentDay') then return model

    if model.get('length') isnt 0
      event = model.find (event) ->
        {
          isMultiDay
          featuredRange
        } = event.getProperties 'isMultiDay', 'featuredRange'
        not (featuredRange or isMultiDay)
      currentDay = moment event.get('start') if event?

    # if model.get('length') is 0 or currentDay is undefined
    if currentDay is undefined
      slug = @get 'rangeSlug'
      # providedModel = transition.providedModels[slug]
      providedModel = transition.providedModelsArray[0]

      if typeof providedModel is 'string'
        dateSlug = transition.params[slug]
        format = @get 'format'
        currentDay = moment dateSlug, format
      else
        meta = @metaForType 'event'
        metaRange = moment(meta.start).twix(moment meta.end)
        currentDay = if metaRange.countInner(slug) < 2 then metaRange.start
        else moment()
    model.set 'currentDay', currentDay.clone()

  serialize: (model, params) ->
    # if model is undefined then return 'oops'
    ret = {}
    slug = @get 'rangeSlug'
    # currentDay = @getCurrentDay @controllerFor(slug)
    currentDay = model.get 'currentDay'

    today = @get 'today'
    format = @get 'format'
    formatDefault = @get 'formatDefault'

    ret[slug] = if currentDay.twix(today).isSame(slug) then formatDefault
    else currentDay.format format
    ret

  setupController: (controller, model) ->
    currentDay = model.get 'currentDay'
    slug = @get 'rangeSlug'
    format = @get 'format'
    # Sets the path for app-navigation
    app = @controllerFor('application')
    app.set "#{slug}Path", moment(currentDay).format(format)
    controller.setProperties
      currentDay: currentDay
      model: model

  load: (range) ->
    #// Works for Day, but not month
    #// Should allow for the use of cached data
    # meta = @metaForType 'event'
    # currentModel = @get 'currentModel'
    #
    # if range.contains(meta.start) and
    #   range.contains(meta.end) and
    #   currentModel then return currentModel

    fetchRange =
      start: range.start.unix()
      end: range.end.unix()

    store = @get 'store'
    store.findQuery 'event', fetchRange

  loadRange: (slug, input) ->
    range = @getRange slug, input
    @load range

  actions:
    transitionToDay: (date, model) ->
      if date is null or date is undefined then return
      model ?= @loadRange 'day', date
      @transitionTo 'day', model

    transitionToMonth: (date, model) ->
      app = @controllerFor 'month'
      model ?= @loadRange 'month', date
      app.set 'currentDay', moment(date)
      @transitionTo 'month', model
