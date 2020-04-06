const tail = require('../index').tail;
const assert = require("chai").assert;

describe("#tail", () => {
  it("should return [1,2,3] from [1,2,3,4]", () => {
    assert.deepEqual(tail([1,2,3,4]),[2,3,4]);
  });
});


