const expect = require('chai').expect;

describe('window', () => {
  const window = require('../window.js').window;

  it('should compute the minimum window to sort to make the whole array sorted', () => {
    const array = [3, 7, 5, 6, 9];

    expect(window(array)).to.eql([1, 3]);
  });
  it('should compute the minimum window to sort to make the whole array sorted', () => {
    const array = [10, 3, 7, 5, 6, 9];

    expect(window(array)).to.eql([0, 5]);
  });
  it('should compute the minimum window to sort to make the whole array sorted', () => {
    const array = [3, 7, 5, 6, 9, 2];

    expect(window(array)).to.eql([0, 5]);
  });
  it('should compute the minimum window to sort to make the whole array sorted', () => {
    const array = [3, 7, 7, 6, 9];

    expect(window(array)).to.eql([1, 3]);
  });
  it('should compute the minimum window to sort to make the whole array sorted', () => {
    const array = [3, 4, 5, 6, 9];

    expect(window(array)).to.eql([-1, 5]);
  });
  it('should compute the minimum window to sort to make the whole array sorted', () => {
    const array = [3, 8, 7, 7, 9];

    expect(window(array)).to.eql([1, 3]);
  });
  it('should compute the minimum window to sort to make the whole array sorted', () => {
    const array = [3];

    expect(window(array)).to.eql([-1, 1]);
  });
  it('should compute the minimum window to sort to make the whole array sorted', () => {
    const array = [];

    expect(window(array)).to.eql([-1, 0]);
  });
  it('should compute the minimum window to sort to make the whole array sorted', () => {
    const array = [3, 1];

    expect(window(array)).to.eql([0, 1]);
  });
  it('should compute the minimum window to sort to make the whole array sorted', () => {
    const array = [3, 3, 3];

    expect(window(array)).to.eql([-1, 3]);
  });
});
