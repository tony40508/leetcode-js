/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let maxProfit = 0
  let minProfit = prices[0]

  for (const price of prices) {
    if (price < minProfit) {
      minProfit = price
    }
    if (price - minProfit > maxProfit) {
      maxProfit = price - minProfit
    }
  }

  return maxProfit
}
