define(['ember', 'libs/bootstrap-transition'], function(Em) {
  var Mixin, ModalSubView, backdropClass, modalClass;

  ModalSubView = Em.View.extend({
    classNames: ['fade', 'modal-subview'],
    classNameBindings: ['isFadedIn:in:out'],
    isFadedIn: Em.computed(function() {
      return this.get('parentView.isFadedIn');
    }).property('parentView.isFadedIn')
  });
  modalClass = ModalSubView.extend({
    tagName: 'article',
    classNames: ['modal', 'event-data']
  });
  backdropClass = ModalSubView.extend({
    classNames: ['modal-backdrop'],
    click: function(event) {
      return this.get('parentView').closeModal();
    }
  });
  Mixin = Em.Mixin.create({
    modalClass: modalClass,
    modalBackdropClass: backdropClass,
    isFadedIn: false,
    isFadedOut: false,
    _fadedChildren: 0,
    closeModal: function() {
      var $, children, e,
        _this = this;

      try {
        $ = Em.$;
        children = this.get('childViews').map(function(item) {
          return item.get('element');
        });
        $(children).filter('.modal-subview').one($.support.transition.end, function(event) {
          var fadedChildren;

          fadedChildren = _this.get('_fadedChildren') + 1;
          _this.set('_fadedChildren', fadedChildren);
          if (fadedChildren === children.length) {
            return _this.set('isFadedOut', true);
          }
        });
        return this.set('isFadedIn', false);
      } catch (_error) {
        e = _error;
        console.log(e);
        debugger;
        this.set('isFadedIn', false);
        return this.set('isFadedOut', true);
      }
    },
    afterFadeOut: Em.observer(function() {
      return this.get('controller').closeModal(this);
    }, 'isFadedOut'),
    didInsertElement: function() {
      this._super();
      return this.set('isFadedIn', true);
    }
  });
  return Mixin;
});
