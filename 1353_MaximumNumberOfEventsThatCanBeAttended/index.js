/**
 * @param {number[][]} events
 * @return {number}
 */
function maxEvents(events) {
  const set = new Set()
  const startDay = 0
  const endDay = 1

  // sort by endDay. if same, sort by startDay.
  events.sort((a, b) =>
    a[endDay] !== b[endDay] ? a[endDay] - b[endDay] : a[startDay] - b[startDay]
  )

  for (const [start, end] of events) {
    for (let i = start; i <= end; i++) {
      if (!set.has(i)) {
        set.add(i)
        break
        // every event only spends one day.
      }
    }
  }

  return set.size
}
