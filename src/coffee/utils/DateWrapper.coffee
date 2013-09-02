###
  This DateWrapper incorporates some of the code from moment.js
###

define ['ember', './Core'], (Em, VU) ->

  # Order is very important for the clear function. Lowest to highest magnitude
  gettersAndSetters = 'milliseconds|seconds|minutes|hours|date|month|year'.split('|')
  getterAndSetterMap = do ->
    ret = {}
    for index in gettersAndSetters
      key = index.replace /s$/, ''
      if index is 'year' then index = 'FullYear'
      ret[key] = ret[key + 's'] = Em.String.capitalize index
    ret

  getOrSet = (key, value, isUTC) ->
    content = @get 'content'
    utc = if isUTC then 'UTC' else ''
    if value?
      @propertyWillChange 'content'
      content["set#{utc}#{key}"] value
      @propertyDidChange 'content'
      value
    else
      content["get#{utc}#{key}"]()

  proxyGetterAndSetterFunction = Em.computed((key, value) ->
    key = getterAndSetterMap[key]
    getOrSet.call this, key, value, @get('isUTC')
  ).property 'content', 'isUTC'

  proxyGettersAndSetters = {}
  for own key of getterAndSetterMap
    proxyGettersAndSetters[key] = proxyGetterAndSetterFunction

  units = do ->
    index = gettersAndSetters.indexOf('date')
    a = Em.A(gettersAndSetters.slice()).replace index, 1, 'day'
    a.map (item) -> item.replace /s$/, ''
  unitAliases = 'ms|s|m|h|d|M|y'.split('|')
  unitMillisecondFactors = [1, 1e3, 6e4, 36e5, 864e5, 2592e6, 31536e6]
  unitIncrementFactors = [1000, 60, 60, 24, 30, 12, NaN]
  unitAliaseMap = do ->
    ret = {}
    for value, key in unitAliases
      ret[value] = units[key]
    ret

  getUnitIndex = (unit) -> units.indexOf(unitAliaseMap[unit] or unit)

  getUnitFactor = (unit) ->
    index = getUnitIndex unit
    if index < 0 then return undefined
    unitMillisecondFactors[index]

  absRound = (number) ->
    if number < 0 then Math.ceil number
    else Math.floor number

  getDuration = (duration) ->
    console.group 'getDuration'
    console.log {duration}

    ret = {}
    ret.data = data = {}
    ret.milliseconds = 0
    ret.days = 0
    ret.months = 0
    next = 0

    for alias, i in unitAliases
      unit = units[i]
      plural = unit + 's'
      inc = unitIncrementFactors[i]
      dur = duration[plural] or duration[unit] or duration[alias] or 0
      data[plural] = (dur % inc) + next
      next = absRound dur / inc

      switch alias
        when 'ms', 's', 'm', 'h'
          ret.milliseconds += dur * unitMillisecondFactors[i]
        when 'd'
          ret.days += dur
        when 'M'
          ret.months += dur
        when 'y'
          ret.months += dur * 12
        else Em.assert('getDuration: This line should never run')
    console.groupEnd 'getDuration'
    ret

  # unitMillisecondFactors =
  #   Milliseconds: 1
  #   Seconds: 1e3
  #   Minutes: 6e4
  #   Hours: 36e5
  #   Days: 864e5
  #   Months: 2592e6
  #   Years: 31536e6

  #-----------------------------#
  # The actual Mixin definition
  #-----------------------------#
  DateWrapper = Em.Mixin.create proxyGettersAndSetters,
    isUTC: false
    isValid: Em.computed( ->
      not isNaN(+@content)
    ).property 'content'

    _isValidObserver: Em.observer( ->
      Em.assert('VU.DateWrapper#_isValidObserver: The Date object is no longer valid.', @get('isValid'))
    , 'isValid')

    init: ->
      @_super()

      # Trigger validation
      @propertyDidChange 'isValid'

    clear: (mask = 63) ->
      @beginPropertyChanges()
      console.groupCollapsed 'DateWrapper#clear'
      for key, i in gettersAndSetters
        flag = 1<<i
        if flag > key then break
        if (flag & mask) is flag
          console.log key, {mask, i, flag, andMask: flag & mask}
          value = if i is 4 then 1 else 0
          @set key, value
      console.groupEnd 'DateWrapper#clear'
      @endPropertyChanges()
      this

    add: (value, unit) ->
      mill = getUnitFactor unit
      obj = {}
      obj[unit] = value
      duration = getDuration(obj)
      console.log duration
      if mill is undefined or typeof value isnt 'number' then return this
      @set 'time', +@content + mill * value

    subtract: (value, unit) ->
      mill = getUnitFactor unit
      if mill is undefined or typeof value isnt 'number' then return this
      @set 'time', +@content - mill * value

    startOf: (unit) ->
      index = getUnitIndex unit
      if index < 0 then return this
      @clear (1<<index) - 1

    endOf: (unit) ->
      @beginPropertyChanges()
      @startOf(unit).add(1, unit).subtract(1, 'ms')
      @endPropertyChanges()

    time: Em.computed( (key, value) ->
      key = Em.String.capitalize key
      getOrSet.call this, key, value, false
    ).property 'content'

    unix: Em.computed( (key, value) ->
      if value?
        @set 'time', value * 1000
        value
      else Math.floor(@get('time') / 1000)
    ).property 'time'

    toDate: -> new Date @get('time')

    _dateObserver: Em.observer( (self, key) ->
      console.groupCollapsed 'DateWrapper#_dateObserver'
      console.log arguments
      console.log "'#{key}' has changed to: ", @get(key)
      console.groupEnd 'DateWrapper#_dateObserver'
    , 'content', 'isUTC')

  VU.DateWrapper = DateWrapper