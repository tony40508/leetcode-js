/**
 * @param {string} text
 * @return {number}
 */
function maxNumberOfBalloons(text) {
  const map = Array.from(text).reduce(
    (acc, cur) => {
      if (typeof acc[cur] === 'number') {
        acc[cur]++
      }
      return acc
    },
    { b: 0, a: 0, l: 0, o: 0, n: 0 }
  )

  map['l'] = Math.floor(map['l'] / 2)
  map['o'] = Math.floor(map['o'] / 2)

  return Math.min(...Object.values(map))
}
