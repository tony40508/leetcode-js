import reverseInt from '../0007_reverseint/index'

test('0007_reverseInt', () => {
  expect(reverseInt(123)).toEqual(321)
  expect(reverseInt(1230)).toEqual(321)
  expect(reverseInt(-Math.pow(2, 31))).toEqual(0)
  expect(reverseInt(Math.pow(2, 31))).toEqual(0)
})
