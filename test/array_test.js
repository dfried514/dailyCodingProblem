const expect = require('chai').expect;

describe('ARRAY TESTS', () => {
  describe('products', () => {
    const products = require('../products.js').products;

    it('should compute the products of all elements, not including the element at each index', () => {
      const array = [1, 2, 3, 4, 5];

      expect(products(array)).to.eql([120, 60, 40, 30, 24]);
    });
  });
});
