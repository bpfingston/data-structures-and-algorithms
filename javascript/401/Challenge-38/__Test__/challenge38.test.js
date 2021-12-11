'use strict';

const Graph = require('../module/graph');

describe('Can use graph', () => {
  it('Can traverse depth first', () => {
    let graph = new Graph();
    let A = graph.addVertex('A');
    let B = graph.addVertex('B');
    let C = graph.addVertex('C');
    let D = graph.addVertex('D');
    graph.addDirectedEdge(A, B);
    graph.addDirectedEdge(A, C);
    graph.addDirectedEdge(A, D);
    graph.addDirectedEdge(B, C);
    graph.addDirectedEdge(C, D);

    var myTest = graph.depthFirst(A);

    expect(Array.from(myTest)).toEqual([{"value": "A"}, {"value": "B"}, {"value": "C"}, {"value": "D"}]);
  });
  it('Return a collection of nodes in the order they were visited, even if there is only 1.', () => {
    let graph = new Graph();
    let A = graph.addVertex('A');

    graph.addDirectedEdge(A, A);

    var myTest = graph.depthFirst(A);

    expect(Array.from(myTest)).toEqual([{'value': 'A'}]);
  });
  it('Return an error if there is no valid node.', () => {
    let graph = new Graph();
    var myTest = graph.depthFirst();

    expect(Array.from(myTest).join('')).toEqual("Please put a node with value.");
  });
});

