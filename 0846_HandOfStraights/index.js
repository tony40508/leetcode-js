/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
function isNStraightHand(hand, W) {
  const countsMap = hand.reduce((acc, cur) => {
    if (Number.isInteger(acc[cur])) {
      acc[cur]++
    } else {
      acc[cur] = 1
    }
    return acc
  }, {})

  const sortedHand = [...new Set(hand)].sort((a, b) => a - b)

  for (const card of sortedHand) {
    const count = countsMap[card]
    // e.g. [1, 2, 3, 6, 2, 3, 4, 7, 8]
    // 4 will be 0 so we need to skip it.
    if (count === 0) continue

    for (let i = card; i < card + W; i++) {
      if (!Number.isInteger(countsMap[i])) {
        return false
      }
      // should minus count instead of 1
      // e.g. [1, 1, 2, 2, 3, 3] count is 2
      countsMap[i] -= count
      if (countsMap[i] < 0) return false
    }
  }

  return true
}

export default isNStraightHand
