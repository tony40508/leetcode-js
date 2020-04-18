/**
 * @param {number} num
 * @return {number[]}
 */
function closestDivisors(num) {
  // From Math.sqrt(num + 2)
  for (let i = Math.floor(Math.sqrt(num + 2)); i >= 1; i++) {
    // num + 1 is closer
    if ((num + 1) % i === 0) {
      return [(num + 1) / i, i]
    }
    if ((num + 2) % i === 0) {
      return [(num + 2) / i, i]
    }
  }
}
