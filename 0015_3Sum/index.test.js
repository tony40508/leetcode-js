import threeSum from './index'

describe('threeSum', () => {
  it('should skip same value', () => {
    expect(threeSum([-2, 0, 0, 2, 2])).toEqual([[-2, 0, 2]])
  })
  it('should skip same value first when sum === 0', () => {
    expect(threeSum([-2, 0, 1, 1, 2])).toEqual([
      [-2, 0, 2],
      [-2, 1, 1],
    ])
  })
  it('should skip same first value when nums[i] === nums[i - 1]', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ])
  })
})
