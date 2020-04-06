const findKeyByValue = require("../index").findKeyByValue;
const assert = require("chai").assert;

describe("#findKeyByValue", () => {

  it("should return drama if given the key 'the Wire' ", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("should return undefined if give 'That 70's show", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});



const bestTVShowsByGenre = {
  // eslint-disable-next-line camelcase
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
