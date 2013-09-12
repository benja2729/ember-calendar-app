
App.PagerItemComponent = Em.Component.extend
  tagName: 'li'
  format: 'ddd, MMM Do'
  date: Em.computed (key, value) ->
    if value? then moment value
    else undefined
  click: (event) ->
    event.preventDefault()
    date = @get 'date'
    @sendAction 'action', date
