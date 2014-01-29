
define ['ember', './Core', 'libs/bootstrap-transition'], (Em, VU) ->

  ModalSubView = Em.View.extend
    classNames: ['fade', 'modal-subview']
    classNameBindings: ['parentView.isFadedIn:in:out']

  backdropClass = ModalSubView.extend
    classNames: ['modal-backdrop']
    click: ->
      target = @get('target')
      target = if target isnt undefined then target
      else @get('controller')
      target.closeModal(@get('parentView'))

  modalClass = ModalSubView.extend
    tagName: 'article'
    classNames: ['modal', 'event-data']
    # didInsertElement: ->
    #   @_super()
    #   if @get('parentView.useBackdrop') #append after element
    #     backdropClass.create().appendTo this

  ModalView = Em.View.extend
    modalClass: modalClass
    modalBackdropClass: backdropClass
    isFadedIn: false

    destroy: ->
      try
        $ = Em.$
        fadedChildren = 0
        sup = @_super
        @set 'isFadedIn', false
        children = @get('childViews').map (item) -> item.get('element')
        $(children).filter('.modal-subview').one $.support.transition.end, (event) =>
          if ++fadedChildren >= children.length then sup.apply(this)
      catch e
        console?.warn? 'Apparently the browser doesn\'t support javascript transition listeners: ', e
        @_super()

    didInsertElement: ->
      @_super()
      @set 'isFadedIn', true

  VU.ModalView = ModalView
