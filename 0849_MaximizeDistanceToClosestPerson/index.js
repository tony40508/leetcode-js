/**
 * @param {number[]} seats
 * @return {number}
 */
function maxDistToClosest(seats) {
  // first person <-> first position
  let prev
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      prev = i
      break
    }
  }

  let result = prev
  for (let j = prev + 1; j < seats.length; j++) {
    if (seats[j] === 0) continue
    result = Math.max(result, Math.floor((j - prev) / 2))
    prev = j
  }

  // last person <-> last position
  for (let k = seats.length - 1; k >= 0; k--) {
    if (seats[k] === 1) {
      prev = k
      break
    }
  }

  return Math.max(result, seats.length - 1 - prev)
}

export default maxDistToClosest
