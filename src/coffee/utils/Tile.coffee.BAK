
define ['ember', './Core', './StatefulDate'], (Em, VU) ->

  Tile = Em.ArrayProxy.extend VU.StatefulDate,
    format: 'DD'
    # filtersBinding: required

    _debugObserver: Em.observer( ->
      console.log @get('filters')
    , 'filters')

    filteredEvents: Em.computed( ->
      content = @get 'content'
      filters = @get 'filters'
      if Em.get(filters, 'categories.length') is 0 then content
      else
        ret = content.filter filters.appliesToEvent
        Em.A ret
    ).property 'content', 'filters.categories.@each'

    isToday:Em.computed( ->
      {start, end} = @get('filters.today').getRange 'day', 'unix'
      start <= @get('_date.unix') <= end
    ).property '_date', 'filters.today'

    isSelected: Em.computed( ->
      {start, end} = @get('filters.currentDate').getRange 'day', 'unix'
      start <= @get('_date.unix') <= end
    ).property '_date', 'filters.currentDate'

    isInMonth: Em.computed( ->
      {start, end} = @get('filters.currentDate').getRange 'month', 'unix'
      start <= @get('_date.unix') <= end
    ).property '_date', 'filters.currentDate'

    hasEvents: Em.computed( ->
      @get('filteredEvents.length') > 0
    ).property 'filteredEvents.@each'

  VU.Tile = Tile
