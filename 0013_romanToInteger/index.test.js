import { romanToInt } from '../0013_romanToInteger/index'

test('0013_romanToInteger', () => {
  expect(romanToInt('III')).toEqual(3)
  expect(romanToInt('IV')).toEqual(4)
  expect(romanToInt('LVIII')).toEqual(58)
  expect(romanToInt('MCMXCIV')).toEqual(1994)
})
