/**
 * @param {string} S
 * @return {string}
 */
function reverseParentheses(S) {
  const stack = ['']

  for (const s of S) {
    if (s === '(') {
      stack.push('')
    } else if (s === ')') {
      const popS = stack.pop()
      stack[stack.length - 1] += popS.split('').reverse().join('')
    } else {
      stack[stack.length - 1] += s
    }
  }

  return stack.pop()
}

// a(bcdefghijkl(mno)p)q
// a ['a']
// ( ['a', '']
// b ['a', 'b']
// c ['a', 'bc']
// d ['a', 'bcd']
// e ['a', 'bcde']
// f ['a', 'bcdef']
// g ['a', 'bcdefg']
// h ['a', 'bcdefgh']
// i ['a', 'bcdefghi']
// j ['a', 'bcdefghij']
// k ['a', 'bcdefghijk']
// l ['a', 'bcdefghijkl']
// ( ['a', 'bcdefghijkl', '']
// m ['a', 'bcdefghijkl', 'm']
// n ['a', 'bcdefghijkl', 'mn']
// o ['a', 'bcdefghijkl', 'mno']
// ) ['a', 'bcdefghijklonm']
// p ['a', 'bcdefghijklonmp']
// ) ['apmnolkjihgfedcb']
// q ['apmnolkjihgfedcbq']
