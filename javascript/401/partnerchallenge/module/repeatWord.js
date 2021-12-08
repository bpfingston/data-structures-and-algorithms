"use strict";

const repeat = (str) => {
  var myArr = [];
  const words = str.toLowerCase().split(/\W+/);
  let counter = 1;
  let topWord;
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (words.indexOf(word) !== words.lastIndexOf(word)) {
      myArr.forEach((arr) => {
        if (arr[0] === word) {
          arr = [word, counter++];
        }
      });
    } else {
      counter = 1;
      myArr.push([word, counter]);
    }
  }
  console.log(myArr);
  for (var j = 0; j < myArr.length; j++) {
    var wordCount = myArr[j][1];
    if (wordCount >= myArr[j + 1][1]) {
      topWord = myArr[j][0];
    } else {
      topWord = myArr[j + 1][0];
    }
  }
  return topWord;
};

module.exports = repeat;
