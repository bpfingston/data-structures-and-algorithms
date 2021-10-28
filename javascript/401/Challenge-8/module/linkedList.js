'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let oldHead = this.head;
    let newHead = new Node(value);
    newHead.next = oldHead;
    this.head = newHead;
    console.log(this.head);
  }
  zip(L1, L2) {
    let C1 = L1.head;
    let C2 = L2.head;

    while (C1) {
      const N1 = C1.next;
      C1.next = C2;
      C2 = N1;
      C1 = C1.next;
    }
    return L1;
  }
}
module.exports = LinkedList;
