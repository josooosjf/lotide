const flatten = function(array1) {
  return [].concat.apply([], array1);
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
