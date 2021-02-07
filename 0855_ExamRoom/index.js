/**
 * @param {number} N
 */
function ExamRoom(N) {
  this.N = N
  this.students = []
}

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function () {
  if (this.students.length === 0) {
    this.students.push(0)
    return 0
  }

  let prev = -1
  let seat = 0
  let maxDist = this.students[0]
  for (const student of this.students) {
    if (prev > -1) {
      const dist = Math.floor((student - prev) / 2)
      if (dist > maxDist) {
        maxDist = dist
        seat = prev + dist
      }
    }
    prev = student
  }

  const lastPosition = this.N - 1
  const lastStudent = this.students[this.students.length - 1]
  if (lastPosition - lastStudent > maxDist) {
    seat = lastPosition
  }

  let i = 0
  while (i < this.students.length && this.students[i] < seat) {
    i++
  }
  this.students.splice(i, 0, seat)

  return seat
}

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function (p) {
  for (let i = 0; i < this.students.length; i++) {
    if (this.students[i] === p) {
      this.students.splice(i, 1)
      break
    }
  }
}

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
