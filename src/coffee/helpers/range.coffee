rangeDefaults =
  groupMeridiems: true
  spaceBeforeMeridiem: true
  showDate: true
  showDayOfWeek: false
  twentyFourHour: false
  implicitMinutes: true
  implicitYear: true
  yearFormat: "YYYY"
  monthFormat: "MMM"
  # monthFormat: "MMMM"
  weekdayFormat: "ddd"
  # dayFormat: "D"
  dayFormat: "DD"
  # meridiemFormat: "A"
  meridiemFormat: "a"
  hourFormat: "h"
  minuteFormat: "mm"
  allDay: "all day"
  explicitAllDay: false
  lastNightEndsAt: 0

Em.Handlebars.registerBoundHelper 'range', (range, format, options={hash: {}}) ->
# Em.Handlebars.helper 'range', (range, format, options) ->
  if $.isPlainObject(format)
    if format.hash then options = format
    else $.extend(options.hash, format)

  result = if Em.typeOf(format) is 'string'
    range.simpleFormat format
  else
    args = $.extend({}, rangeDefaults, options.hash)
    range.format args

  result = result.replace /12(:00)?\s?[Aa]\.?[Mm]\.?/g, 'Midnight'
  result = result.replace /12(:00)?\s?[Pp]\.?[Mm]\.?/g, 'Noon'
  result