
define ['ember', './Core'], (Em, VU) ->
  
  SidePaneView = Em.View.extend
    tagName: 'article'
    classNames: ['pane', 'side-pane']
    closePane: ->
      $pane = $(@get 'element')
      right = -$pane.outerWidth()
      deferred = $.Deferred()

      $pane.stop().animate {right}, ->
        deferred.resolve()

      deferred

    didInsertElement: ->
      $pane = $(@get 'element')
      right = -$pane.outerWidth()

      $pane.css({
        left: 'auto'
        right
      }).stop().animate right: 0

  VU.SidePaneView = SidePaneView
