/**
 * @param {number} n
 * @return {number}
 */
function arrangeCoins(n) {
  let level = 1
  let coins = 0

  while (n - coins >= level) {
    coins += level
    level++
  }

  return level - 1
}
