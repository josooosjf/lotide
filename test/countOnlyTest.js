const assert = require('chai').assert;
const countOnly = require('../index').countOnly;

describe("#countOnly", () => {

  it("should tell us Jason is listed in firstNames 2 times", () => {
    assert.equal(result1["Jason"], 1);
  });
  
  it("should tell us Karima is undefined", () => {
    assert.equal(result1["Karima"],undefined);
  });


});

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });