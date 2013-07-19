
define ['ember', './Core'], (Em, VU) ->

  diff = (a, b) ->
    Math.abs(a) - Math.abs(b)
  
  closest = (collection, callback, min, max, target) ->
    console.groupCollapsed 'closestBinarySearch'
    console.time 'closestBinarySearch - time'

    collection = Em.A collection if not Em.Array.detect(collection)
    term = 0      # Assumes true for 2 item arrays
    stop = 0

    while 0 <= min < max and diff(max, min) > 1

      # Make sure that this function doesn't stall a page
      Em.assert 'closestBinarySearch has timed-out', ++stop < 50

      mid = (min + max)>>1
      Em.assert 'closestBinarySearch: The mid index is out of bounds', mid < max

      item = collection.objectAt mid
      term = callback.call target, item, mid, collection

      console.groupCollapsed "Group #{stop}"
      console.log """
        min:  #{min}
        max:  #{max}
      """
      console.log """
        mid:  #{mid}
      """

      if term > 0 then min = mid # min = mid + 1
      else max = mid

      console.log """
        min:  #{min}
        max:  #{max}
      """
      console.log """
        term: #{term}
      """
      console.groupEnd "Group #{stop}"       

    maxItem = collection.objectAt max
    maxTerm = callback.call target, maxItem, max, collection

    console.log """
      max:     #{max}
      maxTerm: #{maxTerm}
      mid:     #{mid}
      term:    #{term}
      diff:    #{diff(term, maxTerm)}
    """

    console.timeEnd 'closestBinarySearch - time'
    console.groupEnd 'closestBinarySearch'

    if diff(term, maxTerm) > 0 then maxItem
    else item

  VU.closest = (collection, callback, target) ->
    min = 0
    max = Em.get(collection, 'length') - 1
    closest collection, callback, min, max, target
