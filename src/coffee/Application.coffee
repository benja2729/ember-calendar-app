window.App = Em.Application.create
  # LOG_TRANSITIONS: true
  # LOG_TRANSITIONS_INTERNAL: true
  rootElement: '#VUCalendar'
  isReady: false
  isMobile: false

if (mobileQuery = window.matchMedia? '(max-width: 979px)')

  App.set 'isMobile', mobileQuery.matches

  mobileQuery.addListener (queryList) ->
    App.set 'isMobile', queryList.matches

App.reopen
  $body: $ 'body'
  scrollTo: (element) ->
    $body = @get '$body'
    top = if element is 'top' or element is undefined then 0
    else $(element).offset().top
    $body.scrollTop top
    this
  today: Em.computed( -> moment()).volatile()

App.ready = -> App.set 'isReady', true
