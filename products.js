const products = array => {
  let preProducts = [1, array[0]];
  let postProducts = [];
  let output = [];
  postProducts[array.length - 1] = 1;
  postProducts[array.length - 2] = array[array.length - 1];
  for (let i = 2; i < array.length; i++) {
    preProducts[i] = preProducts[i-1] * array[i-1];
  }
  for (let i = array.length - 2; i >= 0; i--) {
    postProducts[i] = postProducts[i+1] * array[i+1];
  }
  for (let i = 0; i < array.length; i++) {
    output[i] = preProducts[i] * postProducts[i];
  }
  // console.log(preProducts);
  // console.log(postProducts);
  return output;
};

let array = [1,2,3,4,5];
console.log(products(array));



