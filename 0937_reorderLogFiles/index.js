export const reorderLogFiles = logs => {
  let digits = []
  let letters = []

  logs.forEach(log => {
    let numOrStr = log.split(' ')[1]
    if (Number(numOrStr) || Number(numOrStr) === 0) {
      digits.push(log)
    } else {
      letters.push(log)
    }
  })
  letters.sort((a, b) => {
    let strA = a.substr(a.indexOf(' ') + 1)
    let strB = b.substr(b.indexOf(' ') + 1)
    // console.log(a.indexOf(a.split(' ')[1][0]), a.indexOf(' ') + 1)
    if (strA === strB) return a.localeCompare(b)
    return strA.localeCompare(strB)
  })
  return [...letters, ...digits]
}
