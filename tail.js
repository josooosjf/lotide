const tail = function(x) {
  x.shift();
  return x;
};

module.exports = tail;