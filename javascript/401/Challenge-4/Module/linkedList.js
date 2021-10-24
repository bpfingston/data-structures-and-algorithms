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
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        console.log("The values match and we return true");
        return true;
      }
      current = current.next;
    }
    console.log("no more values in the list");
    return false;
  }

  toString() {
    let current = this.head;
    let response = null;
    while (current) {
      response += `{${current.value}} -> `;
      current = current.next;
    }
    response += `NULL`;
    return response;
  }
}

module.exports = LinkedList;
