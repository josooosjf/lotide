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

const assertArraysEqual = function(array1, array2,) {
  return (assertEqual(eqArrays(array1, array2), true));
};


const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;

assertArraysEqual(letterPositions("hello").e, [1]);

// console.log(letterPositions("hello this is a great day i got it to work with help"));
