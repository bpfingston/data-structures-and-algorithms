"use strict";

const LinkedList = require("../module/linkedList.js");
const Node = require("../module/node.js");

describe("Insert Method", () => {
  it("Where k is greater than the length of the linked list", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.kthFromEnd(5)).toBe('exemption');
  });
  it("Where k and the length of the list are the same", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.kthFromEnd(4)).toBe('exemption');
  });
  it("Where k is not a positive integer", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.kthFromEnd(-1)).toBe('exemption');
  });
  it("Where the linked list is of a size 1", () => {
    let list = new LinkedList();
    list.head = new Node(1);
    expect(list.kthFromEnd(0)).toEqual(1);
  });
  it("“Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.kthFromEnd(2)).toBe(3);
  });
});
