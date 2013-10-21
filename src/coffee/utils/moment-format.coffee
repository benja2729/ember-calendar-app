
# moment format overrides
moment.lang 'en',

  meridiem : (hour, minute, isLowercase) ->
    if hour < 12
      if isLowercase then 'a.m.' else 'A.M.'
    else if hour >= 12
      if isLowercase then 'p.m.' else 'P.M.'

  monthsShort : [
      "Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.",
      "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
  ]
