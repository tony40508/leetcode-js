/**
 * @param {number[]} lights
 * @return {number}
 *
 * 1. A bulb change color to blue only if it is on and all the previous bulbs (to the left) are turned on too.
 * 2. Return the number of moments in which all turned on bulbs are blue.
 */
function numTimesAllBlue(lights) {
  let curPtr = 1 // pointer to all previous bulbs are on
  let result = 0
  let curMaxLight = 0
  const didLighted = {}

  lights.forEach(light => {
    didLighted[light] = true
    curMaxLight = Math.max(curMaxLight, light)
    if (light >= curPtr) {
      while (didLighted[curPtr]) {
        // Run ptr to the right
        curPtr++
      }
      if (curPtr - 1 === curMaxLight) {
        // All previous bulbs are on
        result++
      }
    }
  })

  return result
}
