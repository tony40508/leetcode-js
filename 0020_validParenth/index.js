const isValid = s => {
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  let stack = []

  for (let i = 0; i < s.length; i++) {
    if (pairs[s[i]]) {
      stack.push(s[i])
    } else {
      let popVal = stack.pop()
      if (pairs[popVal] !== s[i]) return false
    }
  }
  return stack.length === 0
}
