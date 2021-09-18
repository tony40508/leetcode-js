/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  for (const coin of coins) {
    for (let i = 0; i < dp.length; i++) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin])
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}

// const coinChange = (coins, amount) => {
//   if (!coins.length || !amount) return 0
//   let ans = [0]
//   let index = 1

//   while (!ans[amount]) {
//     ans[index] = Infinity
//     for (let i = 0; i < coins.length; i++) {
//       if (coins[i] <= index) {
//         ans[index] = Math.min(ans[index], 1 + ans[index - coins[i]])
//       }
//     }
//     index++
//   }
//   return ans[amount] === Infinity ? -1 : ans[amount]
// }
