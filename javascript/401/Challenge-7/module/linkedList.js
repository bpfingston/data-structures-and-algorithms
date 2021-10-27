'use strict';

const Node = require('./node');

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
  kthFromEnd(k) {
    let temp = this.head;
    let count = 0;
    let current = this.head;
    if (k >= 0) {
      while (current !== null) {
        current = current.next;
        count++;
      } if (count <= k) {
        return 'exemption';
      } for (let i = 0; i < count - k - 1; i++) {
        temp = temp.next;
      }
      return temp.value;
    }
    return 'exemption';
  }

  
}

module.exports = LinkedList;
// const linkedList = new LinkedList();
// linkedList.head = new Node(1);
// linkedList.head.next = new Node(2);
// linkedList.head.next.next = new Node(3);
// linkedList.head.next.next.next = new Node(4);
// linkedList.insertAfter(3, 10);

// console.log(linkedList);
