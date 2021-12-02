"use strict";

const repeat = (str) => {
  const words = str.toLowerCase().split(/\W+/);
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (words.indexOf(word) !== words.lastIndexOf(word)) {
      return word;
    }
  }
};

module.exports = repeat;

