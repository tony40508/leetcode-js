/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let maxProfit = 0
  let minPrice = prices[0]

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price
    }
    if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice
    }
  }

  return maxProfit
}

function maxProfit(prices) {
  let minPrice = Number.MAX_SAFE_INTEGER
  let maxProfit = 0

  for (const price of prices) {
    minPrice = Math.min(minPrice, price)
    maxProfit = Math.max(maxProfit, price - minPrice)
  }

  return maxProfit
}
