
# App.Filter = Em.Object.extend
#   categories: Em.required Array

App.Filter = DS.Model.extend
  categories: DS.hasMany 'category'
