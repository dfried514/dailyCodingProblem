const window = array => {
  let maxLeft = array[0];
  let minRight = array[array.length - 1];
  let rightBorder = array.length;
  let leftBorder = -1;

  for (let i = 1; i < array.length; i++) {
    if (array[i] >= maxLeft && rightBorder === array.length) {
      maxLeft = array[i];
    }
    if (array[i] < maxLeft) {
      rightBorder = i;
    }
  }
  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] <= minRight && leftBorder === -1) {
      minRight = array[i];
    }
    if (array[i] > minRight) {
      leftBorder = i;
    }
  }
  return [leftBorder, rightBorder];
};
module.exports = {window};
