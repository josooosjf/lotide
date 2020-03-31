const assertEqual = function(actual, expected) {
 
  if (actual.toString() === expected.toString()) {
    console.log(`😀😀😀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👿👿👿 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(x) {
  x.shift();
  return x;
};


console.log(tail([3,4,5,6,7]));

assertEqual(tail([1,'sweet','cool',4]), ['sweet','cool',4]);