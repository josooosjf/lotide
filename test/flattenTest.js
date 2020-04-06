const flatten = require("../index").flatten;
const assert = require("chai").assert;

describe("#flatten", () => {
  it("should flatten the array [1, 2, [3, 4], 5, [6]] to [1,2,3,4,5,6]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]),[1,2,3,4,5,6]);
  });

});

