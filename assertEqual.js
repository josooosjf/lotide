const assertEqual = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    console.log(`😀😀😀 Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`👿👿👿 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};



module.exports = assertEqual;
