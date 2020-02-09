const countAndSay = n => {
  let str = '1'
  for (let i = 1; i < n; i++) {
    let strArray = [...str]
    let count = 1
    str = ''
    console.log(strArray)

    for (let j = 0; j < strArray.length; j++) {
      if (strArray[j] !== strArray[j + 1]) {
        str += count + strArray[j]
        console.log(count, str)
        count = 1
      } else {
        count++
      }
    }
  }
  return str
}

console.log(countAndSay(5))
// ["1"]
// 1, "11"
// ========================
// ["1", "1"]
// 2, "21"
// ========================
// ["2", "1"]
// 1, "12"
// 1, "1211"
// ========================
// ["1", "2", "1", "1"]
// 1, "11"
// 1, "1112"
// 2, "111221"
