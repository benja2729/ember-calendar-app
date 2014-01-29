
App.DataUtilMixin = Em.Mixin.create
  metaForType: (type) ->
    store = @get 'store'
    model = store.modelFor(type)
    store.typeMapFor(model).metadata
