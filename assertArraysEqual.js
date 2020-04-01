const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`👿👿👿 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const eqArrays = function(array1,array2) {
  return (JSON.stringify(array1) === JSON.stringify(array2));
};

const assertArraysEqual = function(array1, array2, expected) {
  return (assertEqual(eqArrays(array1, array2), expected));
};



// console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 4]),false));
// console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true));
// console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false));

console.log(assertArraysEqual([1,2,3],[1,2,4],false));
