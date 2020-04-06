const findKeyByValue = function(showsByGenre,tvShowName) {
  for (let [key,value] of Object.entries(showsByGenre))  {
    if (value === tvShowName) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
