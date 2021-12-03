"use strict";

const HashTable = require("./hashmap");

function treeIntersection(tree1, tree2) {
  var arr = [];
  const root1 = tree1.root;
  const root2 = tree2.root;

  if (!root1 || !root2) {
    if (!root1 && root2) {
      return 'Please put a valid node into tree 1';
    } else if (root1 && !root2) {
      return 'Please put a valid node into tree 2';
    } else {
      return 'Please put 2 valid nodes.';
    }
  }

  if (root1 && root2) {
    let myHash = traverse(root1, arr);
    secondTraverse(root2, arr, myHash);
  }
  return arr;
}

function traverse(node, arr, newHash = new HashTable(1024)) {
  newHash.add(node.value.toString(), node);
  if (node.left) {
    traverse(node.left, arr, newHash);
  }
  if (node.right) {
    traverse(node.right, arr, newHash);
  }
  return newHash;
}

function secondTraverse(node, arr, hash) {
  var value = hash.find(node.value.toString());
  if (value) {
    arr.push(node.value);
  }
  if (node.left) {
    secondTraverse(node.left, arr, hash);
  }
  if (node.right) {
    secondTraverse(node.right, arr, hash);
  }
}

module.exports = treeIntersection;
