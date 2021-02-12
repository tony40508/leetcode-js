import maxDistToClosest from './index'

describe('maxDistToClosest', () => {
  test('normal case: [1, 0, 0, 0, 1, 0, 1]', () => {
    expect(maxDistToClosest([1, 0, 0, 0, 1, 0, 1])).toBe(2)
  })
  test('edge case: [1, 0, 0, 0]', () => {
    expect(maxDistToClosest([1, 0, 0, 0])).toBe(3)
  })
  test('edge case: [0, 1]', () => {
    expect(maxDistToClosest([0, 1])).toBe(1)
  })
})
