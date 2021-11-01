"use strict";

const Node = require("./node");

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let addNode = new Node(value);
    let currentBack = this.back;

    if (currentBack) {
      currentBack.next = addNode;
    }

    this.back = addNode;
    if (!this.front) {
      this.front = addNode;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return "this queue is empty";
    }

    let current = this.front;
    this.front = current.next;

    if (this.back === current) {
      this.back = current.next;
    }
  }
  peek() {
    if (this.isEmpty()) {
      return "this queue is empty";
    }
    let front = this.front.value;
    return front;
  }
  isEmpty() {
    let front = this.front;
    if (!front) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;
