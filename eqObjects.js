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

// const ab = { a: "1", b: "2", c: [1,2]};
// const ba = { b : "2", a: "1"};
// const abc = { a : "1", b : "2", c: "3"};

// console.log(assertEqual(eqObjects(ab,ba),true));
// console.log(assertEqual(eqObjects(ab, abc),false));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc),true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2),false)); // => false
