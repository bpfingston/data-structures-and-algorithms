'use strict';

const BinaryTree = require('../module/BinaryTree');
const BinarySearchTree = require('../module/BinarySearchTree');
const Node = require('../module/node');


describe('testing Binary Tree and BinarySearchTree', () => {
  it('Can successfully instantiate an empty tree', () => {
    let bT = new BinaryTree();
    let bST = new BinarySearchTree();
    expect(bT.root).toBeNull();
    expect(bST.root).toBeNull();
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    let bT = new BinaryTree();
    let bST = new BinarySearchTree();
    bT.root = new Node(1);
    bST.add(2);
    expect(bT.root.value).toEqual(1);
    expect(bST.root.value).toEqual(2);
  });
  it('Can successfully add a left child and right child to a single root node', () => {
    let bST = new BinarySearchTree();
    bST.add(5);
    bST.add(7);
    bST.add(3);
    expect(bST.root.value).toEqual(5);
    expect(bST.root.right.value).toEqual(7);
    expect(bST.root.left.value).toEqual(3);
  });
  it('Can successfully return a collection from a preorder traversal', () => {
    // let bST = new BinarySearchTree();
    let bT = new BinaryTree();
    bT.root = new Node(5);
    bT.root.right = new Node(8);
    bT.root.left = new Node(7);
    bT.root.right.left = new Node(3);
    bT.root.left.right = new Node(1);
    expect(bT.preOrder(bT.root)).toEqual([5,7,1,8,3]);
  });
  it('Can successfully return a collection from an inorder traversal', () => {
    // let bST = new BinarySearchTree();
    let bT = new BinaryTree();
    bT.root = new Node(5);
    bT.root.right = new Node(8);
    bT.root.left = new Node(7);
    bT.root.right.left = new Node(3);
    bT.root.left.right = new Node(1);
    expect(bT.inOrder(bT.root)).toEqual([7,1,5,3,8]);
  });
  it('Can successfully return a collection from a postorder traversal', () => {
    // let bST = new BinarySearchTree();
    let bT = new BinaryTree();
    bT.root = new Node(5);
    bT.root.right = new Node(8);
    bT.root.left = new Node(7);
    bT.root.right.left = new Node(3);
    bT.root.left.right = new Node(1);
    expect(bT.postOrder(bT.root)).toEqual([1,7,3,8,5]);
  });
  it('Can successfully search for a value within a tree', () => {
    let bST = new BinarySearchTree();
    bST.add(5);
    bST.add(7);
    bST.add(3);
    expect(bST.contains(7)).toEqual(true);
  });
  it('Can successfully not find a value within a tree', () => {
    let bST = new BinarySearchTree();
    bST.add(5);
    bST.add(7);
    bST.add(3);
    expect(bST.contains(6)).toEqual(false);
  });
});
