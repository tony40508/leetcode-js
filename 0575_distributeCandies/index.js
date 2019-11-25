function distributeCandies(candies) {
  return Math.min(new Set(candies), candies.length / 2)
}
function distributeCandies(candies) {
  let count = 0
  let map = new Map()
  for (const candy of candies) {
    if (!map.get(candy)) {
      map.set(candy, true)
      count++
    }
  }
  return count > candies.length / 2 ? candies.length / 2 : count
}
