const flatten = function(array1) {
  return [].concat.apply([], array1);
};

module.exports = flatten;

