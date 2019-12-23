function pushDominoes(dominoes) {
  let result = ''
  const length = dominoes.length
  const recordArray = [...new Array(length)].fill(0)

  let record = 0
  // to 'R'
  for (let i = 0; i < length; i++) {
    if (dominoes[i] === 'R') {
      record = length // assign biggest number
    } else if (dominoes[i] === 'L') {
      record = 0 // conteract to 'R'
    } else {
      record = Math.max(record - 1, 0) // at least > 0
    }
    recordArray[i] = recordArray[i] + record
  }
  // to 'L'
  for (let i = length - 1; i >= 0; i--) {
    if (dominoes[i] === 'L') {
      record = length
    } else if (dominoes[i] === 'R') {
      record = 0
    } else {
      record = Math.max(record - 1, 0)
    }
    recordArray[i] = recordArray[i] - record
  }
  result = recordArray
    .map(record => {
      if (record > 0) return 'R'
      if (record < 0) return 'L'
      if (record === 0) return '.'
    })
    .join('')
  return result
}
