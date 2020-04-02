const assertArraysEqual = function(actual, expected,) {
  if (eqArrays(actual,expected)) {
    console.log(`😀😀😀 Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`👿👿👿 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};


const eqArrays = function(array1,array2) {
  return (JSON.stringify(array1) === JSON.stringify(array2));
};

assertArraysEqual([1,2,3],[1,2,3]);
