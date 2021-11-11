'use strict';

class BinaryTree {
  constructor(value) {
    this.value = value;
  }

  fizzBuzzTree(karyTree) {
    if (!karyTree.root) return 'there is no tree';
    let stk = [];
    stk.push(karyTree.root);

    while (stk.length > 0) {
      let parent = stk.pop();
      parent.value = this.fBMeta(parent.value);

      for (let i = parent.children.length - 1; i >= 0; i--) {
        stk.push(parent.children[i]);
      }
    }
  }
  fBMeta(value) {
    if (value % 15 === 0) {
      return 'FizzBuzz';
    } else if (value % 3 === 0) {
      return 'Fizz';
    } else if (value % 5 === 0) {
      return 'Buzz';
    }
    return value.toString();
  }
}

module.exports = BinaryTree;
