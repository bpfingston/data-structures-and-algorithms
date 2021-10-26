"use strict";

const LinkedList = require("../module/linkedList.js");
// const Node = require("../Module/node.js");

describe("Insert Method", () => {
  it("Can successfully instantiate an empty linked list", () => {
    let list = new LinkedList();

    expect(list.head).toBe(null);
  });
  it("Can successfully add a node to the end of the linked list", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.append(4);
    expect(list.head.next.next.next.value).toBe(4);
  });
  it("Can successfully add multiple nodes to the end of a linked list", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.append(4);
    list.append(5);
    list.append(6);
    expect(list.head.next.next.next.value).toBe(4);
    expect(list.head.next.next.next.next.value).toBe(5);
    expect(list.head.next.next.next.next.next.value).toBe(6);
  });
  it("Can successfully insert a node before a node located i the middle of a linked list", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insertBefore(1, 5);
    expect(list.head.next.next.value).toBe(5);
    expect(list.head.next.next.next.value).toBe(1);
  });

  it("Can successfully insert a node before a node located i the first of a linked list", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insertBefore(3, 5);
    expect(list.head.value).toBe(5);
    expect(list.head.next.value).toBe(3);
  });
  it("Can successfully insert after a node in the middle of the linked list", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insertAfter(2, 5);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(5);
    expect(list.head.next.next.next.value).toBe(1);
  });
  it("Can successfully insert a node after the last node of the linked list", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insertAfter(1, 5);
    list.insertAfter(5, 6);
    expect(list.head.next.next.value).toBe(1);
    expect(list.head.next.next.next.value).toBe(5);
    expect(list.head.next.next.next.next.value).toBe(6);
  });
});
