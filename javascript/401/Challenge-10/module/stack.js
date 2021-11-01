'use strict';

const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let current = this.top;
    let addNode = new Node(value);
    addNode.next = current;
    this.top = addNode;
  }

  pop() {
    let current = this.top;
    if (this.isEmpty()) {
      return'this stack is empty';
    }
    this.top = current.next;
    return current.value;
  }
  peek() {
    if (this.isEmpty()) {
      return'this stack is empty';
    }
    let current = this.top.value;
    return current;
  }
  isEmpty() {
    let current = this.top;
    if (!current) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Stack;
