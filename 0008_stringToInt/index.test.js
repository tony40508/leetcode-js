import { myAtoi } from '../0008_stringToInt/index'

test('0008_stringToInt', () => {
  expect(myAtoi('42')).toEqual(42)
  expect(myAtoi('   -42')).toEqual(-42)
  expect(myAtoi('4193 with words')).toEqual(4193)
  expect(myAtoi('words and 987')).toEqual(0)
  expect(myAtoi('-91283472332')).toEqual(-2147483648)
})
