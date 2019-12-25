// function sortArray(nums) {
//   const length = nums.length
//   if (length < 2) {
//     return nums
//   }
//   const pivotIndex = length - 1
//   const pivot = nums[pivotIndex]
//   let left = []
//   let right = []

//   for (let i = 0; i < pivotIndex; i++) {
//     if (nums[i] < pivot) {
//       left.push(nums[i])
//     } else {
//       right.push(nums[i])
//     }
//   }
//   return [...sortArray(left), pivot, ...sortArray(right)]
// }

function sortArray(nums) {
  function quickSort(array, left, right) {
    if (left < right) {
      const pivotIndex = partition(array, left, right)
      quickSort(array, left, pivotIndex - 1)
      quickSort(array, pivotIndex + 1, right)
    }
  }
  function partition(array, left, right) {
    let pivotIndex = left - 1 // lowest index
    const pivot = array[right]
    for (let i = left; i < right; i++) {
      if (array[i] <= pivot) {
        // if array[i] === pivot also need to pivotIndex++
        pivotIndex++
        ;[array[i], array[pivotIndex]] = [array[pivotIndex], array[i]]
      }
    }
    // pivotIndex++ must bigger than pivot, so swap them
    // e.g [3, 1, 4, 2, 9, 5] pivotIndex here is `3`
    // so pivotIndex++ then get `9` must bigger than 5
    pivotIndex++
    ;[array[pivotIndex], array[right]] = [array[right], array[pivotIndex]]
    return pivotIndex
  }
  quickSort(nums, 0, nums.length - 1)
  return nums
}

console.log(sortArray([5, 2, 3, 1]))
