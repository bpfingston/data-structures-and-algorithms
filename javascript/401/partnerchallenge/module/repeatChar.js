'use strict';

const mostRepeat = (str) => {
  var myArr = [];
  var words = str.split(/\W+/);
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    for (var j = 0; j < word.length; j++) {
      var char = word[j];
      if (myArr.includes(char)) {
        return false;
      } else {
        myArr.push(char);
      }
    }
  }
  return true;
};

module.exports = mostRepeat;
