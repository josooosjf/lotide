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


const takeUntil = function(array, callback) {
  // callback() returns true when should stop taking
  // loop the array
  //  x, and x's index
  //   if callback(x) returns true then we find our index

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element)) {
      return array.slice(0, i);
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

// console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual([1, 2, 5, 7, 2], results1);