/**
 * @param {number} n
 * @return {number}
 */
// 1. odd times switch on
// 2. index(i)) is on in ith round(n) if n divides i
// 3. divisors come in pairs except 'square'
// e.g. (1, 36), (2, 18), (3, 12), (4, 9), (6) -> odd

function bulbSwitch(n) {
  return Math.floor(Math.sqrt(n))
}
