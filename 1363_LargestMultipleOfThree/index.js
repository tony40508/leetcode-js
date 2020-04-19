/**
 * @param {number[]} digits
 * @return {string}
 */
function largestMultipleOfThree(digits) {
  const remain1 = []
  const remain2 = []
  const sum = digits.reduce((acc, cur) => acc + cur, 0)

  digits.sort((a, b) => a - b)
  digits.forEach((digit, index) => {
    if (digit % 3 === 1) {
      if (remain1.length < 2) {
        remain1.push(index)
      }
    } else if (digit % 3 === 2) {
      if (remain2.length < 2) {
        remain2.push(index)
      }
    }
  })
  console.log('remain1', remain1)
  console.log('remain2', remain2)

  function getResultString(skip1, skip2) {
    const digitsResult = []
    let i = digits.length - 1

    while (i >= 0) {
      const digit = digits[i]
      if (i !== skip1 && i !== skip2) {
        digitsResult.push(digit)
      }
      i--
    }
    // remove leading 0s
    i = 0
    while (i < digitsResult.length - 1 && digitsResult[i] === 0) {
      i++
    }

    return digitsResult.slice(i).join('')
  }

  if (sum % 3 === 1) {
    if (remain1.length > 0) {
      return getResultString(remain1[0], -1)
    }
    return getResultString(remain2[0], remain2[1])
  } else if (sum % 3 === 2) {
    if (remain2.length > 0) {
      return getResultString(remain2[0], -1)
    }
    return getResultString(remain1[0], remain1[1])
  } else {
    return getResultString(-1, -1)
  }
}

console.log(largestMultipleOfThree([8, 6, 7, 1, 0]))
