const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😀😀😀 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👿👿👿 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqArrays = function(array1,array2) {
  return (JSON.stringify(array1) === JSON.stringify(array2));
};

const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1).sort();
  let object2Keys = Object.keys(object2).sort();
  
  if (object1Keys.length !== object2Keys.length || !eqArrays(object1Keys, object2Keys)) {
    return false;
  }
  
  for (let key of object1Keys) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1,value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }


  return true;

};


// assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' });
// assertObjectsEqual({ a: '1', b: 3 },{ b: 2, a: '1' });
// assertObjectsEqual({ a: ['a', 2, "3"], b: '1' },{ a: ['a', 2, '3'], b: '1' });
