"use strict";

const PseudoQueue = require("../module/pseudoQueue.js");
// const Stack = require("../module/stack");


describe("Enqueue testing", () => {
  it("enqueue into a queue", () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
    expect(pseudoQueue.stack1.top.value).toBe(3);
  });
  it("fail to enqueue", () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue();
    expect(pseudoQueue.enqueue()).toBe('there is no value');
  });
});
describe("Dequeue testing", () => {
  it("dequeue into a queue", () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
    expect(pseudoQueue.dequeue()).toBe(1);
    expect(pseudoQueue.dequeue()).toBe(2);
  });
  it("fail to dequeue", () => {
    let pseudoQueue = new PseudoQueue();
    expect(pseudoQueue.dequeue()).toBe("this queue is empty");
  });
  it("can successfully dequeue, then enqueue, then dequeue", () => {
    let pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);
    pseudoQueue.dequeue();
    pseudoQueue.enqueue(4);
    expect(pseudoQueue.stack1.top.value).toBe(4);
    expect(pseudoQueue.dequeue()).toBe(2);
  });
});
