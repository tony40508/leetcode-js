/**
 * @param {number} n
 * @return {number}
 */
function countOrders(n) {
  let result = 1
  let modulo = 10 ** 9 + 7
  for (let i = 1; i <= n; i++) {
    // n!(1 * 3 * 5 ... (2n - 1))
    // pickup (n!)
    result *= i
    result %= modulo
    // delivery (1 * 3 * 5 ... (2n - 1))
    result *= 2 * i - 1
    result %= modulo
  }
  return result
}
