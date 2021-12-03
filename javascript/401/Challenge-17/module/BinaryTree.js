'use strict';

class BinaryTree {
  constructor() {
    this.root = null;
    this.newMax = 0;
  }
  breadthFirst(tree){
    if(!tree.root){
      return 'There is no tree :D';
    }
    console.log('we in here');
    this.array = [];
    this.array.push(tree.root);
    this.output = [];
    while(this.array.length){
      const current = this.array.shift();
      if(current.left){
        this.array.push(current.left);
      }
      if(current.right){
        this.array.push(current.right);
      }
      this.output.push(current.value);
    }
    return this.output;
  }
}

module.exports = BinaryTree;
