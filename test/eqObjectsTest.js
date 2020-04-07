const eqObjects = require("../index").eqObjects;
const assert = require("chai").assert;

describe("#eqObjects", () => {

  it("should return true that object cd is equal to object dc", () => {
    assert.strictEqual(eqObjects(cd,dc), true);
  });

  it("should return that cd is not equal to cd2", () => {
    assert.strictEqual(eqObjects(cd,cd2),false);

  });


});

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

