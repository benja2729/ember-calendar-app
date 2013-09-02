
require 'utils/ButtonView'

App.ApplicationView = Em.View.extend
  classNames: ['row-fluid', 'pane', 'app-container']
  bodyClassName: 'main-pane'
  filtersClassName: 'filter-pane'

  FilterToggle: VU.ButtonView.extend
    classNames: ['filter-toggle']
    action: 'showFilters'
    target: 'parentView'
    actionContext: Em.computed.alias 'element'

  actions:
    showFilters: (buttonElement) ->
      # TODO: Add functionality for when the browser resizes
      $this = $(@get 'element')
      $body = $this.find('.' + @get 'bodyClassName')
      $filters = $this.find('.' + @get 'filtersClassName')
      $button = $(buttonElement)

      buttonWidth = $button.outerWidth true
      filtersWidth = $filters.outerWidth true
      windowWidth = $(window).width()

      left = if parseInt($body.css('left'), 10) > 0 then 0
      else
        if buttonWidth + filtersWidth > windowWidth
          windowWidth - buttonWidth
        else filtersWidth / $this.width() * 100 + '%'
      $body.animate {left}
