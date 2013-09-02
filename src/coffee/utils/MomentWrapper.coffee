
define ['ember', './Core', 'moment'], (Em, VU, moment) ->

  watchedProperties = ['_d', '_f', '_i', '_l', '_isUTC']
  # setOnly = ['utc', 'local', 'add', 'subtract', 'startOf', 'endOf']
  getOnly = [
    'valueOf', 'unix', 'format', 'daysInMonth', 'isValid'
    'fromNow', 'calendar', 'isLeapYear', 'isDST', 'zone'
    'dayOfYear', 'isoWeek'
  ]
  watchMap =
    'utc': 4
    'local': 4
    'add': 0
    'subtract': 0
    'startOf': 0
    'endOf': 0
    'lang': 3

  passThroughFunc = (key) ->
    (args...) ->
      content = @get('content')
      content[key].apply content, args

  passThroughFuncWithMoment = (key) ->
    (input, args...) ->
      input = Em.get(input, 'content') if MomentWrapper.detect(input)
      args.shift input
      content = @get('content')
      content[key].call content, args

  watchedPassThroughFunc = (key) ->
    watch = watchedProperties[watchMap[key] or 0]
    (args...) ->
      content = @get('content')
      @propertyWillChange watch
      result = content[key].apply content, args
      @propertyDidChange watch
      this

  computedWrapper = (key, value) ->
    content = @get 'content'
    contentKey = "content.#{key}"
    fn = @get contentKey
    isFunction = Em.$.isFunction fn
    watch = watchedProperties[watchMap[key] or 0]
    # console.log {contentKey, value, isFunction, watch, fn: fn.toString(), content}

    # If setter
    if value?
      if isFunction
        @propertyWillChange watch
        fn.call content, value
        @propertyDidChange watch
      else
        @set contentKey, value
      return value

    # If getter
    else
      if isFunction then fn.call content
      else fn

  prototype = {}
  for own key, value of moment.fn
    prototype[key] = if /^to/.test(key) or getOnly.indexOf(key) >= 0 then passThroughFunc(key)
    else if watchMap.hasOwnProperty(key) then watchedPassThroughFunc(key)
    else Em.computed(computedWrapper).property(watchedProperties[watchMap[key] or 0])

  MomentWrapper = Em.Mixin.create Em.Copyable, prototype,
    init: ->
      @_super()
      content = @get('content')
      Em.assert 'MomentProxy#init - You must supply a valid moment object as the content', moment.isMoment(content)

    diff: passThroughFuncWithMoment('diff')
    from: passThroughFuncWithMoment('from')
    isAfter: passThroughFuncWithMoment('isAfter')
    isBefore: passThroughFuncWithMoment('isBefore')
    isSame: passThroughFuncWithMoment('isSame')

    copy: -> VU.M @get('content').clone()
    clone: -> @copy()

    # _dateObserver: Em.observer( (self, key) ->
    #   console.groupCollapsed 'MomentProxy#_dateObserver'
    #   console.log arguments
    #   console.log "'#{key}' has changed to: ", @get(key)
    #   console.groupEnd 'MomentProxy#_dateObserver'
    # , '_f', '_i', '_l', '_isUTC', '_d')

  MomentProxy = Em.ObjectProxy.extend MomentWrapper

  # Redefine mixin to keep from overriding object defaults
  # ignore = []
  # Em.EnumerableUtils.forEach MomentProxy.keys(), (methodName) ->
  #   if moment.fn[methodName] then ignore.push(methodName)

  # console.log 'MomentProxy - ignored properties', ignore

  # if ignore.length > 0
  #   MomentProxy = MomentProxy.without.apply(MomentProxy, ignore);

  VU.M = (args...) ->
    momnt = args[0]
    if not moment.isMoment(momnt) then momnt = moment.apply moment, args
    if MomentWrapper.detect(momnt) then momnt else MomentProxy.create content: momnt

  # # The below doesn't quite work with an AMD implimentation
  # # Might neet to execute outside of the `define` wrapper function
  # MomentProxy.activate = ->
  #   console.log 'MomentProxy#activate'
  #   proxy = (args...) ->
  #     MomentProxy.apply this.apply(momentAlias, args)
  #   window.moment = moment = Em.$.proxy proxy, momentAlias
  #   for own key, value of momentAlias
  #     moment[key] = Em.$.proxy proxy, value
  # if Em.EXTEND_PROTOTYPES or Em.EXTEND_PROTOTYPES.Moment then MomentProxy.activate()

  VU.MomentProxy = MomentProxy