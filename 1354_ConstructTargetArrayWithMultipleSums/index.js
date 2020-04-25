/**
 * @param {number[]} target
 * @return {boolean}
 */
function isPossible(target) {
  if (target.length < 2) {
    return target[0] === 1
  }

  let sum = target.reduce((acc, cur) => acc + cur, 0)

  function getMax(list) {
    const max = Math.max(...list)
    const i = list.indexOf(max)
    return {
      index: i,
      value: max,
    }
  }

  let largest = getMax(target)

  while (largest['value'] > 1) {
    const remain = sum - largest['value']
    const mod = largest['value'] % remain // reduce complexity (compare to minus)

    if (remain === 1) return true
    if (largest['value'] < remain || mod === 0) return false

    target[largest['index']] = mod // replace max with mod
    sum = remain + mod // recalculate sum
    largest = getMax(target)
  }

  return true
}
