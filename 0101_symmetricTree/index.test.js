import { isSymmetric } from './index'

test.skip('0101_symmetricTree', () => {
  expect(isSymmetric([1, 2, 2, null, 3, null, 3])).toEqual(false)
})
