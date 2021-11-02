"use strict";

const Stack = require("./stack");

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    if(!value){
      return 'there is no value';
    }
    this.stack1.push(value);
  }
  dequeue() {
    if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
      return "this queue is empty";
    }
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.top.value);
        this.stack1.pop();
      }
    }
    var twoTop = this.stack2.top.value;
    this.stack2.pop();
    return twoTop;
  }
}

module.exports = PseudoQueue;
