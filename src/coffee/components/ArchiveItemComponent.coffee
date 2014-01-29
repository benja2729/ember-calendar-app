
App.ArchiveItemComponent = Em.Component.extend
  tagName: 'div'
  # classNames: ['well', 'archive-item']
  classNames: ['col-xs-12', 'col-inline', 'layout-block']
  # classNameBindings: ['isFeatured']
  content: Em.required 'App.Event'
  currentDay: Em.required 'moment'
  filters: Em.required 'App.Filters'

  formatOptions: Em.computed 'content', 'currentDay', 'isPromoted', ->
    {
      currentDay
      content
      isPromoted
    } = @getProperties 'currentDay', 'content', 'isPromoted'

    {
      range
      isFeatured
      featuredRange
      isMultiDay
    } = content.getProperties 'range', 'isFeatured', 'featuredRange', 'isMultiDay'
    ret = {}

    # Simulate formatting options for the range helper
    if (isPromoted and (isFeatured or featuredRange)) or isMultiDay then ret.showDayOfWeek = true
    else ret.showDate = false
    ret

  click: ->
    model = @get 'content'
    @sendAction 'action', model
    # @toggleProperty 'isModal'
  _activeHandler: ((event) ->
    @toggleProperty 'isActive'
  ).on 'mouseEnter', 'mouseLeave'

  animate: true
  isActive: false
  popOut: Em.computed.and 'isActive', 'animate'
