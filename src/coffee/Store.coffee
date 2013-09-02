
App.Store = DS.Store.extend
  revision: 12
  adapter: DS.RESTAdapter.reopen
    url: 'https://api.valpo.edu'
    namespace: 'eventPool2'
