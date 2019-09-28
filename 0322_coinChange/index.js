const coinChange = (coins, amount) => {
  if (!coins.length || !amount) return 0
  let ans = [0]
  let index = 1

  while (!ans[amount]) {
    ans[index] = Infinity
    for (let i = 0; i < coins.length; i++) {
      if (coins[i] <= index) {
        ans[index] = Math.min(ans[index], 1 + ans[index - coins[i]])
      }
    }
    index++
  }
  return ans[amount] === Infinity ? -1 : ans[amount]
}
