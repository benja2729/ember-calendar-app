
define ['ember', 'ValpoUtils', 'App', 'libs/list-view'], (Em, VU, App) ->

  ListView = Em.ListView.extend

    # Configurable Properties
    rowTemplateName: Em.required String
    
    rowCount: 30
    baseRowHeight: 50
    stretchToFill: true

    # Computed Properties
    isMobileBinding: 'App.isMobile'
    contentBinding: 'controller'

    # heightBinding: Em.computed( (property, value) ->
    #   $el = $(@get 'parentView.element')
    #   $el.height()
    # ).property 'isMobile', 'parentView.element'

    # rowHeightBinding: Em.computed( (property, value) ->
    #   height = @get 'height'
    #   count = @get 'rowCount'
    #   stretch = @get 'stretchToFill'
    #   if stretch then height / count
    #   else @get 'baseRowHeight'
    # ).property 'height', 'rowCount', 'stretchToFill'

    willInsertElement: ->
      # debugger

    itemViewClass: Em.ListItemView.extend
      templateName: Em.computed.alias 'parentView.rowTemplateName'


  App.ListView = ListView