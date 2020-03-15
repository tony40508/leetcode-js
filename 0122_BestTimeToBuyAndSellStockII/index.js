/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let result = 0
  if (prices.length < 2) return result

  let buy = prices[0]
  let sell = prices[0]

  for (const price of prices) {
    if (price >= sell) {
      // sell when price is bigger
      sell = price
    } else {
      // buy when price is smaller
      result += sell - buy
      console.log(result)
      buy = price
      sell = price
    }
  }

  result += sell - buy
  return result
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// 0
// 4
// 7
// 7 (return)
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
// 0
// 4
// 8 (return)
console.log(maxProfit([1, 2, 3, 4, 5]))
// 4 (return)
console.log(maxProfit([7, 6, 4, 3, 1]))
// 0
// 0
// 0
// 0
// 0 (return)
