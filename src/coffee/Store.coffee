
require 'ApplicationAdapter'

App.Store = DS.Store.extend
  adapter: App.ApplicationAdapter
