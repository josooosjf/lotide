const assertArraysEqual = require("../assertArraysEqual");
const assert = require("chai").assert;

// describe("#AssertArraysEqual", () => {
//   it("returns the actual array is the same as the expected array", () => {
//     assert.strictEqual([1,2,3],[1,2,3]);
//   });
// });


assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,4,"nices"],[1,4,"nice"]);