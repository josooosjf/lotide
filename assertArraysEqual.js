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

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 4]),true));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),true));
