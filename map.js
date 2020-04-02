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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array,callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0] + ' This is the first letter of');
const results2 = map(words, word => word[1]);


assertArraysEqual(results2,results1);