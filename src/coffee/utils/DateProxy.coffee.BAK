
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
  if value? and key isnt 'Day'
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
  index = gettersAndSetters.indexOf 'date'
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

Duration = (duration) ->
  # console.group 'Duration'

  @data = {}
  @milliseconds = 0
  @days = 0
  @months = 0
  next = 0

  for alias, i in unitAliases
    unit = units[i]
    plural = unit + 's'
    inc = unitIncrementFactors[i]
    dur = duration[plural] or duration[unit] or duration[alias] or 0

    if isNaN inc
      @data[plural] = dur
      next = 0
    else
      @data[plural] = (dur % inc) + next
      next = absRound dur / inc

    switch alias
      when 'ms', 's', 'm', 'h'
        @milliseconds += dur * unitMillisecondFactors[i]
      when 'd'
        @days += dur
      when 'M'
        @months += dur
      when 'y'
        @months += dur * 12
      else Em.assert('getDuration: This line should never run')
  this
  # console.log this
  # console.groupEnd 'Duration'

Duration::timeFromDate = (object) ->
  ms = @milliseconds
  d = @days
  M = @months
  date = object.copy()

  if M isnt 0
    d -= date.get('date') - 1
    month = date.get('month')
    for i in [0...Math.abs(M)]
      date.set('month', month++)
      dim = date.get 'daysInMonth'
      d += if M < 0 then -dim else dim

  ms + d * unitMillisecondFactors[4]

#-----------------------------#
# The actual Mixin definition
#-----------------------------#
VU.DateWrapper = DateWrapper = Em.Mixin.create proxyGettersAndSetters, Em.Copyable, Em.Comparable,
  init: ->
    @_super()
    content = @get 'content'
    if not content? then @set 'content', new Date()

    # Trigger validation
    @propertyDidChange 'isValid'

  isUTC: false

  isDST: Em.computed( ->
    timezone = @get 'timezone'
    test = VU.D @get('year')
    timezone < test.get('timezone') or timezone < test.set('month', 5).get('timezone')
  ).property 'timezone'

  isValid: Em.computed( ->
    not isNaN(+@content)
  ).property 'content'

  _isValidObserver: Em.observer( ->
    Em.assert('DateWrapper#_isValidObserver: The Date object is no longer valid.', @get('isValid'))
  , 'isValid')

  day: Em.computed( ->
    content = @get 'content'
    utc = if @get('isUTC') then 'UTC' else ''
    content["get#{utc}Day"]()
  ).property 'content', 'isUTC'

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

  timezone: Em.computed( ->
    if @get('isUTC') then 0 else @content.getTimezoneOffset()
  ).property 'isUTC'

  daysInMonth: Em.computed( ->
    year = @get 'year'
    month = @get 'month'
    VU.D.utc(year, month + 1, 0).get 'date'
  ).property 'content'

  change: (unit, value) ->
    hash = {}
    if 'number' is typeof unit then hash[value] = unit
    else hash[unit] = value
    @changeProperties hash

  changeProperties: (hash) ->
    duration = DateProxy.duration hash
    time = duration.timeFromDate this
    @set 'time', +@content + time

  startOf: (unit) ->
    index = getUnitIndex unit
    if index < 0 then return this
    @clear (1<<index) - 1

  endOf: (unit) ->
    @beginPropertyChanges()
    hash = {ms: -1}
    hash[unit] = 1
    @startOf(unit).changeProperties hash
    @endPropertyChanges()

  clear: (mask = 63) ->
    @beginPropertyChanges()
    # console.groupCollapsed 'DateWrapper#clear'
    for key, i in gettersAndSetters
      flag = 1<<i
      if flag > key then break
      if (flag & mask) is flag
        # console.log key, {mask, i, flag, andMask: flag & mask}
        value = if i is 4 then 1 else 0
        @set key, value
    # console.groupEnd 'DateWrapper#clear'
    @endPropertyChanges()

  getRange: (unit, convert) ->
    start = @copy().startOf unit
    end = @copy().endOf unit

    if convert?
      start = start.get convert
      end = end.get convert
    {start, end}

  toDate: -> new Date @get('time')
  toString: -> @content.toString()
  copy: -> VU.D @toDate()
  compare: (a, b) -> DateProxy.compare a, b
  diff: (date) -> @compare this, VU.D(date)

  # _dateAssert: Em.observer( (self, key) ->
  #   date = @get('content')
  #   Em.assert '@year isnt getFullYear', @get('year') is date.getFullYear()
  #   Em.assert '@month isnt getMonth', @get('month') is date.getMonth()
  #   Em.assert '@date isnt getDate', @get('date') is date.getDate()
  #   Em.assert '@hours isnt getHours', @get('hours') is date.getHours()
  #   Em.assert '@minutes isnt getMinutes', @get('minutes') is date.getMinutes()
  #   Em.assert '@seconds isnt getSeconds', @get('seconds') is date.getSeconds()
  #   Em.assert '@milliseconds isnt getMilliseconds', @get('milliseconds') is date.getMilliseconds()
  # , 'content', 'isUTC')

VU.DateProxy = Em.ObjectProxy.extend DateWrapper
VU.DateProxy.reopenClass
  compare: (a, b) -> +a.content - +b.content
  duration: (hash) -> new Duration hash
  units: units

createDate = (args, isUTC = false) ->
  switch Em.typeOf args
    when 'string', 'number' then new Date args
    when 'array'
      config = []
      for i in [0...7]
        config[i] = if not args[i]?
          if i is 2 then 1 else 0
        else args[i]

      date = new Date()

      if isUTC
        date.setUTCFullYear config[0], config[1], config[2]
        date.setUTCHours config[3], config[4], config[5]
      else
        date.setFullYear config[0], config[1], config[2]
        date.setHours config[3], config[4], config[5]
      date

    when 'date' then args
    else new Date()

VU.D = (args...) ->
  date = args[0]
  if DateWrapper.detect(date) then return date
  date = createDate (if args.length > 1 then args else date)
  DateProxy.create(content: date)

VU.D.utc = (args...) ->
  date = args[0]
  if DateWrapper.detect(date) then return date
  date = createDate (if args.length > 1 then args else date), true
  DateProxy.create(content: date, isUTC: true)
