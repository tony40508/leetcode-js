function countPrimes(n) {
  let count = 0
  for (let i = 1; i < n; i++) {
    isPrime(i) && count++
  }
  return count
}

function isPrime(number) {
  if (number < 2) return false
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false
  }
  return true
}

// decrease the complexity of the algorithm from O(n) to O(sqrt(n))

// function isPrime(number) {
//  if (number < 2) return false;
//  for (let i = 2; i <= Math.sqrt(number); i++) {
//    if (number % i === 0) return false;
//  }
//  return true;
// }

