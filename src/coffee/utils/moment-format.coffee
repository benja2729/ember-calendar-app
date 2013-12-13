
# moment format overrides
moment.lang 'en',

  meridiem : (hour, minute, isLowercase) ->
    if hour < 12
      if isLowercase then 'a.m.' else 'A.M.'
    else if hour >= 12
      if isLowercase then 'p.m.' else 'P.M.'

  monthsShort : [
      "Jan.", "Feb.", "March", "April", "May", "June",
      "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."
  ]
