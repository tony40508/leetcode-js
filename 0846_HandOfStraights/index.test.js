import isNStraightHand from './index'

describe('isNStraightHand', () => {
  test('count is one', () => {
    expect(isNStraightHand([1, 2, 3, 4, 5], 4)).toBeFalsy()
  })
  test('count is one at first card, and need to skip the count === 0 cards', () => {
    expect(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)).toBeTruthy()
  })
  test('count is more than one at first card', () => {
    expect(isNStraightHand([1, 1, 2, 2, 3, 3], 3)).toBeTruthy()
  })
})
