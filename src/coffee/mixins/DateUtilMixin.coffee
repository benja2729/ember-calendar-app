
App.DateUtilMixin = Em.Mixin.create
  getRange: (slug, input, format) ->
    format = format or @get('format')
    m = if Em.typeOf(input) is 'string'
      moment input, format
    else
      moment input
    m.clone().startOf(slug).twix(m.endOf slug)
