const products = array => {
  let pre = [];
  let post = [];
  let output = [];
  let curProduct = 1;

  pre.push(curProduct);
  for (let i = 0; i < array.length - 1; i++) {
    curProduct *= array[i];
    pre[i + 1] = curProduct;
  }
  curProduct = 1;
  post[array.length - 1] = curProduct;
  for (let i = array.length - 1; i > 0; i--) {
    curProduct *= array[i];
    post[i - 1] = curProduct;
  }
  for (let i = 0; i < array.length; i++) {
    output[i] = pre[i] * post[i];
  }
  return output;
}
module.exports = { products };
