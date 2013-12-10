
utils = Ember.EnumerableUtils
defaultFn = (a, b) -> a is b
toArray = (array) ->
  return array.toArray() if Ember.ArrayProxy.detectInstance(array)
  array

utils.common = common = (array1, array2, fn) ->
  return utils.intersection array1, array2 if not (fn instanceof Function)
  array1 = toArray array1
  array2 = toArray array2
  brk = false
  result = []

  for el1 in array1
    for el2 in array2
      brk = fn el1, el2, array1, array2
      break if brk
    result.push el1 if brk
  result

utils.hasCommon = hasCommon = -> common.apply(null, arguments).length > 0

utils.uncommon = uncommon = (array1, array2, fn) ->
  fn = defaultFn if not (fn instanceof Function)
  brk = false
  result = []
  array1 = toArray array1
  array2 = toArray array2

  for el2 in array2
    for el1 in array1
      brk = fn el1, el2, array1, array2
      break if brk
    result.push el2 if not brk
  result

utils.extend = extend = (array) -> array.concat(uncommon.apply null, arguments)
