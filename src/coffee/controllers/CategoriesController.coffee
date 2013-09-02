
App.CategoriesController = Em.ArrayController.extend
  needs: ['application', 'events']

  # This function is passed into an `Array#filter` function
  # from App.EventsController
  matchEvent: (item, index, enumerable) ->
    categories = @get 'categories'

    for id in item.get('categories').mapProperty 'id'
      if categories.contains(id) then return true
    false

  addCategory: (id) ->
    categories = @get 'categories'
    index = if id <= categories.length then id - 1 else categories.length
    categories.arrayContentWillChange index, 0, 1
    categories.splice index, 0, id
    categories.arrayContentDidChange index, 0, 1

  removeCategory: (id) ->
    categories = @get 'categories'
    index = categories.indexOf id
    categories.arrayContentWillChange index, 1, 0
    categories.splice index, 1
    categories.arrayContentDidChange index, 1, 0

  actions:
    toggleCategory: (category) ->
      categories = @get 'categories'
      id = category.get 'id'
      if categories.contains(id) then @removeCategory id
      else @addCategory id
