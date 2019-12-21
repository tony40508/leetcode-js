function canFinish(numCourses, prerequisites) {
  let coursesMap = new Map()
  prerequisites.forEach(prerequisity => {
    if (!coursesMap.has(prerequisity[0])) {
      coursesMap.set(prerequisity[0], [prerequisity[1]])
    } else {
      const origPrerequisity = coursesMap.get(prerequisity[0])
      coursesMap.set(prerequisity[0], [...origPrerequisity, prerequisity[1]])
    }
  })
  const visitedSet = new Set()
  function isVisited(course) {
    const currentCourse = coursesMap.get(course)
    console.log('currentCourse', currentCourse)
    // First: pervent currentCourse is undefined (not in coursesMap)
    // e.g. [1, 0] shows that 0 is not in coursesMap, so when course = 0, currentCourse will be undefined
    // It means that they are not in loop like [1, 0], [0, 1]
    if (!currentCourse) return

    visitedSet.add(course)
    for (let i = 0; i < currentCourse.length; i++) {
      console.log(i, visitedSet, currentCourse[i])
      if (visitedSet.has(currentCourse[i]) || isVisited(currentCourse[i])) {
        return true
      }
    }
    visitedSet.delete(course)
    return false
  }

  for (let i = 0; i < numCourses; i++) {
    if (isVisited(i)) {
      return false
    }
  }
  return true
}

console.log(canFinish(2, [[1, 0]]))

console.log(
  canFinish(2, [
    [1, 0],
    [0, 1]
  ])
)

console.log(
  canFinish(3, [
    [1, 0],
    [2, 0]
  ])
)
