/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
function angleClock(hour, minutes) {
  const degPerMinute = 360 / 60
  const degPerHour = 360 / 12

  const degOfMinute = minutes * degPerMinute
  const degOfHour = hour * degPerHour + (minutes / 60) * degPerHour
  // 1 minute = 1 /60 hour

  const diffAngle = Math.abs(degOfMinute - degOfHour)

  return Math.min(diffAngle, 360 - diffAngle)
}
