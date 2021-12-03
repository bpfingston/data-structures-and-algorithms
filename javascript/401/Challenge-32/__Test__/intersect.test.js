'use strict';

const treeIntersection = require('../module/tree-intersection');
const Node = require('../module/Node');
const BST = require('../module/binarySearchTree');



describe('testing tree-intersection', () => {
  it('Can find 2 common values in two trees, and return the value.', () => {
    let bT = new BST();
    bT.root = new Node(150);
    bT.root.right = new Node(250);
    bT.root.left = new Node(100);
    bT.root.right.left = new Node(200);
    bT.root.right.right = new Node(350);
    bT.root.right.right.left = new Node(300);
    bT.root.right.right.right = new Node(500);
    bT.root.left.left = new Node(75);
    bT.root.left.right = new Node(160);
    bT.root.left.right.left = new Node(125);
    bT.root.left.right.right = new Node(175);

    let bT2 = new BST();
    bT2.root = new Node(42);
    bT2.root.right = new Node(600);
    bT2.root.left = new Node(100);
    bT2.root.right.left = new Node(200);
    bT2.root.right.right = new Node(350);
    bT2.root.right.right.left = new Node(4);
    bT2.root.right.right.right = new Node(500);
    bT2.root.left.left = new Node(15);
    bT2.root.left.right = new Node(160);
    bT2.root.left.right.left = new Node(125);
    bT2.root.left.right.right = new Node(175);

    expect(treeIntersection(bT, bT2)).toEqual([100, 160, 125, 175, 200, 350, 500]);
  });
  it('Can find a common value in two trees, even if there is only 1 value in each tree.', () => {
    let bT = new BST();
    bT.root = new Node(69);

    let bT2 = new BST();
    bT2.root = new Node(69);

    expect(treeIntersection(bT, bT2)).toEqual([69]);
  });
  it('Can find 2 common values in two trees, even if they are repeated.', () => {
    let bT = new BST();
    bT.root = new Node(150);
    bT.root.right = new Node(15);
    bT.root.left = new Node(181);
    bT.root.right.left = new Node(911);
    bT.root.right.right = new Node(11);
    bT.root.right.right.left = new Node(300);
    bT.root.right.right.right = new Node(500);
    bT.root.left.left = new Node(911);
    bT.root.left.right = new Node(160);
    bT.root.left.right.left = new Node(0);
    bT.root.left.right.right = new Node(175);

    let bT2 = new BST();
    bT2.root = new Node(42);
    bT2.root.right = new Node(600);
    bT2.root.left = new Node(100);
    bT2.root.right.left = new Node(911);
    bT2.root.right.right = new Node(350);
    bT2.root.right.right.left = new Node(4);
    bT2.root.right.right.right = new Node(500);
    bT2.root.left.left = new Node(15);
    bT2.root.left.right = new Node(160);
    bT2.root.left.right.left = new Node(911);
    bT2.root.left.right.right = new Node(175);

    expect(treeIntersection(bT, bT2)).toEqual([15, 160, 911, 175, 911, 500]);
  });
  it('will return an error if there is no values in the first tree', () => {
    let bT = new BST();

    let bT2 = new BST();
    bT2.root = new Node(42);
    expect(treeIntersection(bT, bT2)).toEqual('Please put a valid node into tree 1');
  });
  it('will return an error if there is no values in the second tree', () => {
    let bT = new BST();
    bT.root = new Node(42);

    let bT2 = new BST();

    expect(treeIntersection(bT, bT2)).toEqual('Please put a valid node into tree 2');
  });
  it('will return an error if there is no values in either tree', () => {
    let bT = new BST();

    let bT2 = new BST();
    expect(treeIntersection(bT, bT2)).toEqual('Please put 2 valid nodes.');
  });
  it('will return an error if there is no values in either tree', () => {
    let bT = new BST();

    let bT2 = new BST();
    expect(treeIntersection(bT, bT2)).toEqual('Please put 2 valid nodes.');
  });
  it('Can find 2 common values in two trees, even if they are repeated.', () => {
    let bT = new BST();
    bT.root = new Node(86);
    bT.root.right = new Node(7);
    bT.root.left = new Node(5);
    bT.root.right.left = new Node(3);
    bT.root.right.right = new Node(0);
    bT.root.left.left = new Node(9);


    let bT2 = new BST();
    bT2.root = new Node(4);
    bT2.root.right = new Node(8);
    bT2.root.left = new Node(14);
    bT2.root.right.left = new Node(15);
    bT2.root.right.right = new Node(23);
    bT2.root.left.left = new Node(42);

    expect(treeIntersection(bT, bT2)).toEqual([]);
  });
});
