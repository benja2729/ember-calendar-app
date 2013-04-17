
define ['ember', 'libs/bootstrap-transition'], (Em) ->

  ModalSubView = Em.View.extend
    classNames: ['fade', 'modal-subview']
    classNameBindings: ['isFadedIn:in:out']
    isFadedIn: Em.computed( ->
      @get('parentView.isFadedIn')
    ).property 'parentView.isFadedIn'

  modalClass = ModalSubView.extend
    tagName: 'article'
    classNames: ['modal', 'event-data']

  backdropClass = ModalSubView.extend
    classNames: ['modal-backdrop']
    click: (event) -> @get('parentView').closeModal()

  Mixin = Em.Mixin.create
    modalClass: modalClass
    modalBackdropClass: backdropClass
    isFadedIn: false
    isFadedOut: false
    _fadedChildren: 0

    closeModal: ->

      # Wrap in try-catch in case $.support.transition.end isn't supported
      try
        $ = Em.$
        children = @get('childViews').map((item) ->
          item.get('element')
        )

        $(children).filter('.modal-subview').one $.support.transition.end, (event) =>
          fadedChildren = @get('_fadedChildren') + 1
          @set '_fadedChildren', fadedChildren

          # Set the View to be faded out only when all child elements have
          # finished their transition
          if fadedChildren is children.length then @set 'isFadedOut', true

        # Trigger modal transition out
        @set 'isFadedIn', false

      catch e
        console.log e
        debugger
        # In case transitions aren't supported
        @set 'isFadedIn', false
        @set 'isFadedOut', true

    afterFadeOut: Em.observer ->
      if @get('isFadedOut') then @get('controller').closeModal this
    , 'isFadedOut'

    didInsertElement: ->
      @_super()
      @set 'isFadedIn', true

  Mixin
