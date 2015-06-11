var isFiniteNumber = require('is-finite-number');

/**
 * Get the minimum of two numbers that works the way you would expect.
 * If neither value is a valid finite number returns nothing.
 * If one value is not a valid number return the other.
 * Otherwise return the min of the two
 */
module.exports = function getMin(leftMin, rightMin) {
  var isLeftFinite = isFiniteNumber(leftMin);
  var isRightFinite = isFiniteNumber(rightMin);
  if (!isLeftFinite && !isRightFinite) return;
  if (!isRightFinite) return leftMin;
  if (!isLeftFinite) return rightMin;
  if (leftMin < rightMin) return leftMin;
  return rightMin;
}
