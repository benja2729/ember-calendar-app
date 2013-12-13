
App.EventController = Em.ObjectController.extend
  needs: ['day']
  dayBinding: 'controllers.day'
  currentDayBinding: 'day.currentDay'
  filteredEventsBinding: 'day.filteredEvents'
  pathnameRegex: new RegExp(window.location.host + window.location.pathname)
  moreInfoUrl: Em.computed 'url', ->
    # Keeps clever people from re-linking to the calendar
    url = @get 'url'
    regex = @get 'pathnameRegex'
    if regex.test(url) then null else url
