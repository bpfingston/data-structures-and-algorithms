'use strict';

const BinaryTree = require('../module/BinaryTree');
const Node = require('../module/node');


describe('testing finding max', () => {
  it('Can successfully find the max value, with max value on the right side.', () => {
    let bT = new BinaryTree();
    bT.root = new Node(5);
    bT.root.right = new Node(8);
    bT.root.left = new Node(7);
    bT.root.right.left = new Node(3);
    bT.root.left.right = new Node(1);
    expect(bT.findMax()).toEqual(8);
  });
  it('Can successfully find the max value, with max value on the left side.', () => {
    let bT = new BinaryTree();
    bT.root = new Node(5);
    bT.root.right = new Node(2);
    bT.root.left = new Node(7);
    bT.root.right.left = new Node(3);
    bT.root.left.right = new Node(8);
    expect(bT.findMax()).toEqual(8);
  });
  it('Can successfully find that there is no number.', () => {
    let bT = new BinaryTree();
    expect(bT.findMax()).toBe('there is no maximum value of null');
  });
});
