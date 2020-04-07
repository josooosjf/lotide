const eqArrays = require("./eqArrays");


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

module.exports = eqObjects;

