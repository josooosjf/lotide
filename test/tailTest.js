const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require("chai").assert;

describe("#tail", () => {
  it("should return [1,2,3] from [1,2,3,4]", () => {
    assert.deepEqual(tail([1,2,3,4]),[2,3,4]);
  });
});

// assertEqual(tail([1,2,3,4]).length, 3);
