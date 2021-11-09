"use strict";

const BinaryTree = require("./BinaryTree");
const Node = require('./node');

class BinarySearchTree extends BinaryTree {
//   constructor() {
//     super();
//     this.root = null;
//   }
  add(val) {
    let newNode = new Node(val);

    if(this.root === null){
      this.root = newNode;
      return;
    }
    let current = this.root;

    while (current) {
      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (current.right === null){
          current.right = newNode;
          break;
        } else {
          current = current.right;
        }
      }
    }
    // if (this.root === null) {
    //   this.root = newNode;
    // } else {
    //   this.traverseAndAdd(this.root.newNode);
    // }
  }

  //   traverseAndAdd(node, newNode) {
  //     if (newNode.value < node.value) {
  //       if (node.left === null) {
  //         node.left = newNode;
  //       } else {
  //         this.traverseAndAdd(node.left, newNode);
  //       }
  //     } else {
  //       if (node.right === null) {
  //         node.ride = newNode;
  //       } else {
  //         this.traverseAndAdd(node.right, newNode);
  //       }
  //     }
  //   }
  contains(val) {
    let current = this.root;

    while (current) {
      if (current.value === val) {
        return true;
      }
      if (val < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;
