let middle = function(array) {
  let middleEven =  ((array.length) / 2 + 1);
  let middleEven2 = ((array.length) / 2 + 2);
  let middleOdd = Math.round(array.length / 2 + 1);

  if (array.length <= 2) {
    return [];
  }
  return array.length % 2 === 0 ? [middleEven,middleEven2] : [middleOdd];
};

console.log(middle([2,3]));
