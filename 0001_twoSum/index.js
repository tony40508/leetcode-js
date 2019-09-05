export const twoSum = (nums, target) => {
  let map = {}

  for (let [key, value] of nums.entries()) {
    let diff = target - value

    if (diff in map) {
      return [map[diff], key]
    }
    map[value] = key
  }
}

