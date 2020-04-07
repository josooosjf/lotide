const letterPositions = require("../index").letterPositions;
const assert = require("chai").assert;

describe("#letterPositions", () => {

  it("should return [2,3] if we are looking for l in hello", () => {
    assert.deepEqual(letterPositions("hello").l, [2,3]);
    
  });

});