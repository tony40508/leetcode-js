const isPalindrome = s => {
  if (s.length < 0) return
  const validStr = s.toLowerCase().replace(/[^\w]/g, '')
  const reversedStr = validStr
    .split('')
    .reverse()
    .join('')
  return validStr === reversedStr
}

function isPalindrome(s) {
  if (s.length < 0) return
  let start = 0
  let end = s.length - 1

  while (start < end) {
    const startStr = s[start].toLowerCase().replace(/[^\w]/g, '')
    const endStr = s[end].toLowerCase().replace(/[^\w]/g, '')
    console.log('start:', start, startStr)
    console.log('end: ', end, endStr)

    if (!startStr) {
      start++
      continue
    }
    if (!endStr) {
      end--
      continue
    }
    if (startStr !== endStr) return false

    start++
    end--
  }
  return true
}

// "A man, a plan, a canal: Panama"

// start: 0 a
// end:  29 a
// start: 1
// end:  28 m
// start: 2 m
// end:  28 m
// start: 3 a
// end:  27 a
// start: 4 n
// end:  26 n
// start: 5
// end:  25 a
// start: 6
// end:  25 a
// start: 7 a
// end:  25 a
// start: 8
// end:  24 p
// start: 9 p
// end:  24 p
// start: 10 l
// end:  23
// start: 10 l
// end:  22
// start: 10 l
// end:  21 l
// start: 11 a
// end:  20 a
// start: 12 n
// end:  19 n
// start: 13
// end:  18 a
// start: 14
// end:  18 a
// start: 15 a
// end:  18 a
// start: 16
// end:  17 c
