/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 *
 * 1. n lights are labeled as number [1, 2, 3 ..., n]
 * 2. m operations:
 * Flip all the lights.
 * Flip lights with even numbers.
 * Flip lights with odd numbers.
 * Flip lights with (3k + 1) numbers, k = 0, 1, 2, ..
 */
function flipLights(n, m) {
  const validN = Math.min(3, n)
  if (m === 0) {
    return 1
  } else if (m === 1) {
    return validN === 1 ? 2 : validN === 2 ? 3 : 4
  } else if (m === 2) {
    return validN === 1 ? 2 : validN === 2 ? 4 : 7
  } else {
    // m >= 3
    return validN === 1 ? 2 : validN === 2 ? 4 : 8
  }
}
