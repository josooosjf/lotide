const eqArrays = require("../index").eqArrays;
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("should return true if the arrays are [1,2,3] and [1,2,3] ", () => {
    assert.strictEqual(eqArrays([1,2,3],[1,2,3]), true);
  });
});
