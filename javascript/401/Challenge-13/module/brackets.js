'use strict';

class Brackets {
  constructor() {
    this.front = null;
    this.back = null;
  }
  validateBrackets(str) {
    let count = 0;
    let queue = [];
    let map = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
    let lib = ['(', ')', '[', ']', '{', '}'];

    for (var i = 0; i < str.length; i++) {
      var char = str[i];
      if (!lib.includes(char)) {
        console.log('get in here!');
      } else if (char === '(' || char === '[' || char === '{') {
        queue.push(char);
        count += 1;
      } else {
        let last = queue.pop();
        if (char !== map[last]) {
          return false;
        }
      }
    }
    if (queue.length !== 0) {
      return false;
    }
    if (count === 0) {
      return false;
    }
    return true;
  }
}

module.exports = Brackets;
