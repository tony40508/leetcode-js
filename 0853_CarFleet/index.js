/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
function carFleet(target, position, speed) {
  if (position.length < 2) return position.length

  const cars = []
  for (let i = 0; i < position.length; i++) {
    const arriveTime = (target - position[i]) / speed[i]
    cars.push({
      position: position[i],
      arriveTime,
    })
  }
  cars.sort((a, b) => a.position - b.position)
  // console.log(cars)

  let result = 0
  // right to left
  for (let j = cars.length - 1; j >= 1; j--) {
    if (cars[j].arriveTime >= cars[j - 1].arriveTime) {
      // previous car will catch up with next car
      // align previous car's arriveTime with next car's
      cars[j - 1].arriveTime = cars[j].arriveTime
    } else {
      result++
    }
  }

  // C -- result++ -- A -- result++ -- B
  // only two so we need add first car
  return result + 1
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]))
