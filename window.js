const window = array => {
  let leftMax = 0;
  let rightBorder = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > leftMax && rightBorder === leftMax) {
      leftMax = array[i];
      rightBorder = array[i];
    }
    if (array[i] < leftMax) {
      rightBorder = array[i];
    }
  }
};

