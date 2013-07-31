
define ['ember', 'ValpoUtils', 'App', 'moment', 'libs/daterangepicker'], (Em, VU, App, moment) ->

  FilterPaneView = Em.View.extend
    start: moment()
    end: moment()
    didInsertElement: ->
      $el = this.$(@get 'element').find '.daterangepicker-report-range'
      _this = this
      controller = @get 'controller'
      $el.daterangepicker
        ranges:
          'Today': [
            moment().startOf('day')
            moment().endOf('day')
          ]
          'Tomorrow': [
            moment().add('days', 1).startOf('day')
            moment().add('days', 1).endOf('day')
          ]
          'This Week': [
            moment().startOf('week')
            moment().endOf('week')
          ]
          'Next Week': [
            moment().add('weeks', 1).startOf('week')
            moment().add('weeks', 1).endOf('week')
          ]
          'This Month': [
            moment().startOf('month')
            moment().endOf('month')
          ]
          'Next Month': [
            moment().add('months', 1).startOf('month')
            moment().add('months', 1).endOf('month')
          ]
      ,
        (start, end) ->
          _this.setProperties {start, end}
          controller.setProperties
            start: start.unix()
            end: end.unix()
          controller.send 'updateRange'

  App.FilterPaneView = FilterPaneView
