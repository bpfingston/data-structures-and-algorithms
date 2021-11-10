'use strict';

const BinaryTree = require('../module/BinaryTree');
const Node = require('../module/node');


describe('testing finding breadth First', () => {
  it('Can successfully navigate a tree using breadth first', () => {
    let bT = new BinaryTree();
    let cT = new BinaryTree();
    bT.root = new Node(5);
    bT.root.right = new Node(8);
    bT.root.left = new Node(7);
    bT.root.right.left = new Node(3);
    bT.root.left.right = new Node(1);
    expect(cT.breadthFirst(bT)).toEqual([5, 7, 8, 1, 3]);
  });
  it('Can successfully navigate an imbalanced tree using breadth first', () => {
    let bT = new BinaryTree();
    let cT = new BinaryTree();
    bT.root = new Node(5);
    bT.root.left = new Node(7);
    bT.root.left.right = new Node(8);
    bT.root.left.left = new Node(3);
    bT.root.left.right.left = new Node(1);
    bT.root.right = new Node(1);
    bT.root.right.left = new Node(2);
    expect(cT.breadthFirst(bT)).toEqual([5, 7, 1, 3, 8, 2, 1]);
  });
  it('Can successfully return an error if tree is null', () => {
    let bT = new BinaryTree();
    let cT = new BinaryTree();
    expect(cT.breadthFirst(bT)).toEqual('There is no tree :D');
  });
});
