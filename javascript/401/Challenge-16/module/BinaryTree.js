'use strict';

class BinaryTree {
  constructor() {
    this.root = null;
    this.newMax = 0;
  }
  traverse(current){
    if(current.value > this.newMax){
      this.newMax = current.value;
    }
    if(current.left){
      this.traverse(current.left);
    }
    if(current.right){
      this.traverse(current.right);
    }
  }
  findMax(){
    if(this.root === null){
      return 'there is no maximum value of null';
    }
    this.traverse(this.root);
    return this.newMax;
  }
}

module.exports = BinaryTree;
