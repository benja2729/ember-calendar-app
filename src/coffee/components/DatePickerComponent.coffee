
require 'components/RangePagerComponent'

#alias
computed = Ember.computed

#helper method used by filter to close over bounds
inRange = (lower, upper) ->
  (each, index) ->
    index >= lower and index < upper


#Basic Ember object that holds a moment Date object and
#a computed value for its "day of the month"
Day = Ember.Object.extend(
  moment: null
  date: computed("moment", ->
    @get("moment").date()
  )
)

#takes in moment, returns an array of all days in that month
buildDaysArrayForMonth = (moment) ->
  daysArray = Em.A()
  firstDay = moment.clone().startOf("month")
  lastDay = moment.clone().endOf("month")
  currentDay = firstDay.clone()
  while currentDay.isBefore(lastDay)
    # daysArray.pushObject Day.create(moment: currentDay)
    daysArray.pushObject currentDay
    currentDay = currentDay.clone().add("days", 1)
  daysArray


#builds an array of nulls of provided length
buildNullArray = (length) ->
  nullAr = []
  i = 0

  while i < length
    nullAr.push null
    i++
  nullAr


#chops up provided array into segments of length 7
#and returns a new array of those arrays
groupByWeeks = (array) ->
  grouped = Em.A([])
  grouped.pushObject array.filter(inRange(0, 7))
  grouped.pushObject array.filter(inRange(7, 14))
  grouped.pushObject array.filter(inRange(14, 21))
  grouped.pushObject array.filter(inRange(21, 28))
  grouped.pushObject array.filter(inRange(28, 35))
  grouped.pushObject array.filter(inRange(35, 42))
  grouped


#
#This component is used to select a date from a given month
#It could, for example, be used in a form or dropdown component/view
#pass in the value for data binding of the chosen date
#pass in the currentMonth to set the default currentMonth
#
App.DatePickerComponent = Ember.Component.extend
  classNames: ['date-picker']
  currentMonth: moment()
  value: null
  dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


  currentMonthName: computed("currentMonth", ->
    currentMonth = @get("currentMonth")
    monthName = currentMonth.format("MMMM YYYY")
    monthName
  )
  
  #
  #   week contains array of days
  #   day contains a moment() and a date (number of that day in the month)
  #   month array contains nulls and days and is always 42 elements
  #  1. build array of all the days for a given month
  #  2. determine what day the month starts on (0 is sun 6 is sat)
  #  3. build an array of nulls to fill the array up to our starting day
  #  4. determine how many days are null at the end of the month array
  #  4. build an array of nulls to fill the array at the tail
  #  5. construct montharray by concatenating nullhead, days, and nulltail
  #  6. group the month array by weeks by filtering by 7 length ranges
  #  
  weeks: computed "currentMonth", ->
    monthArrayLength = 42
    currentMonth = @get("currentMonth").clone()
    daysArray = buildDaysArrayForMonth(currentMonth)
    firstDayPosition = daysArray.get("firstObject").day()
    nullHeadLength = firstDayPosition
    numberOfDays = daysArray.get("length")
    nullTailLength = monthArrayLength - nullHeadLength - numberOfDays
    nullDaysHead = buildNullArray(nullHeadLength)
    nullDaysTail = buildNullArray(nullTailLength)
    monthArray = Em.A(nullDaysHead.concat(daysArray).concat(nullDaysTail))
    weeks = groupByWeeks(monthArray)
    weeks

  actions:
    #select an active day (typically called by action in template)
    selectDate: (day) ->
      @set "value", day

    
    #change the currentMonth being displayed
    #change current month by provided +/- integer
    changeMonth: (newMonth) -> @set 'currentMonth', newMonth
