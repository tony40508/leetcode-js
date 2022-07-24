/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  const intToRomanMap = {
    1000: ['', 'M', 'MM', 'MMM'],
    100: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    10: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    1: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  }

  let result = ''
  let power = 1000

  while (power > 0.1) {
    const lead = Math.floor(num / power) % 10
    if (lead > 0) {
      result += intToRomanMap[power][lead]
    }
    power = power / 10
  }

  return result
}
