const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;


describe("#middle", () => {
  it("should return [3] from [2,3,4]", () => {
    assert.deepEqual(middle([2,3,4]),[3]);
  });

  it("should return [3,4] from [2,3,4,5]", () => {
    assert.deepEqual(middle([2,3,4,5]),[3,4]);
  });

});


// assertArraysEqual((middle([2,3,4])),(middle([2,3,4])));
// assertArraysEqual((middle([2,3,4,5])),(middle([2,3,4,5])));

assertArraysEqual((middle([2,3,4])),(middle([2,3,4])));
assertArraysEqual((middle([2,3,4,5])),(middle([2,3,4,5])));
