const without = function(sourceArray,itemsToRemove) {
  return sourceArray.filter(x => !itemsToRemove.includes(x));

};

console.log(without([2,3,"5"],[5]));

