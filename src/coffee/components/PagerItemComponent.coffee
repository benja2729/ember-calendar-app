
require 'components/ButtonControlComponent'

App.PagerItemComponent = App.ButtonControlComponent.extend
  classNames: ['pager-item']
  format: 'ddd, MMM Do'
  date: Em.computed (key, value) ->
    if value? then moment value
    else undefined
  click: (event) ->
    event.preventDefault()
    date = @get 'date'
    @sendAction 'action', date
