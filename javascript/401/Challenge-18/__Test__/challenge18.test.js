'use strict';

const BinaryTree = require('../module/BinaryTree');
const Node = require('../module/node');


describe('testing finding breadth First', () => {
  it('works properly if the value is divisible by 3: replaces the value with “Fizz”', () => {
    const KaryTree = new BinaryTree();
    const funTree = new BinaryTree();
    KaryTree.root = new Node(10);
    KaryTree.root.children.push(new Node(9));
    KaryTree.root.children.push(new Node(3));
    KaryTree.root.children.push(new Node(45));
    KaryTree.root.children[0].children.push(new Node(5));
    KaryTree.root.children[0].children.push(new Node(9));
    KaryTree.root.children[1].children.push(new Node(12));
    KaryTree.root.children[1].children.push(new Node(18));
    KaryTree.root.children[2].children.push(new Node(99));
    KaryTree.root.children[2].children.push(new Node(150));
    KaryTree.root.children[2].children.push(new Node(22));

    funTree.fizzBuzzTree(KaryTree);

    expect(KaryTree.root.value).not.toBe('Fizz');
    expect(KaryTree.root.children[0].children[0].value).not.toBe('Fizz');
    expect(KaryTree.root.children[0].children[1].value).toBe('Fizz');
    expect(KaryTree.root.children[1].children[1].value).toBe('Fizz');
  });
  it('works properly if the value is divisible by 5: replaces the value with “Buzz”', () => {
    const KaryTree = new BinaryTree();
    const funTree = new BinaryTree();
    KaryTree.root = new Node(3);
    KaryTree.root.children.push(new Node(9));
    KaryTree.root.children.push(new Node(3));
    KaryTree.root.children.push(new Node(45));
    KaryTree.root.children[0].children.push(new Node(13));
    KaryTree.root.children[0].children.push(new Node(55));
    KaryTree.root.children[1].children.push(new Node(12));
    KaryTree.root.children[1].children.push(new Node(65));
    KaryTree.root.children[2].children.push(new Node(99));
    KaryTree.root.children[2].children.push(new Node(150));
    KaryTree.root.children[2].children.push(new Node(22));

    funTree.fizzBuzzTree(KaryTree);

    expect(KaryTree.root.value).not.toBe('Buzz');
    expect(KaryTree.root.children[0].children[0].value).not.toBe('Buzz');
    expect(KaryTree.root.children[0].children[1].value).toBe('Buzz');
    expect(KaryTree.root.children[1].children[1].value).toBe('Buzz');
  });
  it('works properly if the value is divisible by 5: replaces the value with “FizzBuzz”', () => {
    const KaryTree = new BinaryTree();
    const funTree = new BinaryTree();
    KaryTree.root = new Node(3);
    KaryTree.root.children.push(new Node(9));
    KaryTree.root.children.push(new Node(3));
    KaryTree.root.children.push(new Node(45));
    KaryTree.root.children[0].children.push(new Node(13));
    KaryTree.root.children[0].children.push(new Node(60));
    KaryTree.root.children[1].children.push(new Node(12));
    KaryTree.root.children[1].children.push(new Node(150));
    KaryTree.root.children[2].children.push(new Node(99));
    KaryTree.root.children[2].children.push(new Node(150));
    KaryTree.root.children[2].children.push(new Node(22));

    funTree.fizzBuzzTree(KaryTree);

    expect(KaryTree.root.value).not.toBe('FizzBuzz');
    expect(KaryTree.root.children[0].children[0].value).not.toBe('FizzBuzz');
    expect(KaryTree.root.children[0].children[1].value).toBe('FizzBuzz');
    expect(KaryTree.root.children[1].children[1].value).toBe('FizzBuzz');
  });
  it('works properly if the value is divisible by 5: replaces the value with “FizzBuzz”', () => {
    const KaryTree = new BinaryTree();
    const funTree = new BinaryTree();
    funTree.fizzBuzzTree(KaryTree);
    expect(funTree.fizzBuzzTree(KaryTree)).toEqual('there is no tree');
  });
});
