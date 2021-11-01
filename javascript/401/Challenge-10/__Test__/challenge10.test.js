"use strict";



const Node = require("../module/node.js");
const Queue = require("../module/queue.js");
const Stack = require("../module/stack");

describe("Stack testing", () => {
  it("push onto a stack", () => {
    const newStack = new Stack();
    newStack.push(1);
    expect(newStack.top.value).toBe(1);
  });
  it("push multiple values onto a stack", () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.top.value).toBe(3);
    expect(newStack.top.next.value).toBe(2);
    expect(newStack.top.next.next.value).toBe(1);
  });
  it("pop off the stack", () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.pop();
    expect(newStack.top.value).toBe(2);
  });
  it("empty a stack after multiple pops", () => {
    const newStack = new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.pop();
    newStack.pop();
    newStack.pop();
    expect(newStack.top).toBeNull();
  });
  it("peek the next item on the stack", () => {
    const newStack = new Stack();
    newStack.push(1);
    expect(newStack.peek()).toBe(1);
  });
  it("instantiate an empty stack", () => {
    const newStack = new Stack();
    expect(newStack.top).toBeNull();
  });
  it("Calling pop or peek on empty stack raises exception", () => {
    const newStack = new Stack();
    expect(newStack.pop()).toBe("this stack is empty");
    expect(newStack.peek()).toBe("this stack is empty");
  });
});

describe("Queue testing", () => {
  it("enqueue into a queue", () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    expect(newQueue.front.value).toBe(1);
  });
  it("enqueue multiple values into a queue", () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    expect(newQueue.front.value).toBe(1);
    expect(newQueue.front.next.value).toBe(2);
    expect(newQueue.front.next.next.value).toBe(3);
  });
  it("dequeue out of a queue the expected value", () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.dequeue();
    expect(newQueue.front.value).toBe(2);
  });
  it("Can successfully empty a queue after multiple dequeues", () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.front).toBe(null);
  });
  it("Can successfully peek into a queue, seeing the expected value", () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    expect(newQueue.peek()).toBe(1);
  });
  it("instantiate an empty queue", () => {
    const newQueue = new Queue();
    expect(newQueue.front).toBeNull();
  });
  it("Calling dequeue or peek on empty queue raises exception", () => {
    const newQueue = new Queue();
    expect(newQueue.dequeue()).toBe("this queue is empty");
    expect(newQueue.peek()).toBe("this queue is empty");
  });
});
