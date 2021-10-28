"use strict";

const LinkedList = require("../module/linkedList.js");
const Node = require("../module/node.js");

describe("Insert Method", () => {
  it("Should return a Linked List", () => {
    let list1 = new LinkedList();
    list1.insert(2);
    list1.insert(4);
    list1.insert(6);

    let list2 = new LinkedList();
    list2.insert(1);
    list2.insert(3);
    list2.insert(5);

    let List = new LinkedList();
    expect(List.zip(list1, list2)).toEqual({"head": {"data": 6, "next": {"data": 5, "next": {"data": 4, "next": {"data": 3, "next": {"data": 2, "next": {"data": 1, "next": null}}}}}}});
  });
  it("Should return a Linked List when merging lists are of different lengths", () => {
    let list1 = new LinkedList();
    list1.insert(2);
    list1.insert(4);
    

    let list2 = new LinkedList();
    list2.insert(1);
    list2.insert(3);
    list2.insert(5);

    let List = new LinkedList();
    expect(List.zip(list1, list2)).toBe({"head": {"data": 5, "next": {"data": 4, "next": {"data": 3, "next": {"data": 2, "next": {"data": 1, "next": null}}}}}});
  });
});
