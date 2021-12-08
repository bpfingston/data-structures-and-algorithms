'use strict';

const Graph = require('../module/graph');

describe('Can use graph', () => {
  it('Node can be successfully added to the graph', () => {
    let graph = new Graph();
    expect(graph.addVertex('A')).toEqual({'value': 'A'});
  });
  it('An edge can be successfully added to the graph', () => {
    let graph = new Graph();
    let A = graph.addVertex('A');
    let B = graph.addVertex('B');

    graph.addDirectedEdge(A, B);
    expect(graph.adjacencyList.get(A)).toEqual([{'vertex': {'value': 'B'}, 'weight': 0}]);
  });
  it('A collection of all nodes can be properly retrieved from the graph', () => {
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

    expect(graph.getNodes()).toEqual([{'value': 'A'}, {'value': 'B'}, {'value': 'C'}, {'value': 'D'}]);
  });
  it('All appropriate neighbors can be retrieved from the graph', () => {
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

    expect(graph.getNeighbors(A)).toEqual([{'vertex': {'value': 'B'}, 'weight': 0}, {'vertex': {'value': 'C'}, 'weight': 0}, {'vertex': {'value': 'D'}, 'weight': 0}]);
  });
  it('Neighbors are returned with the weight between nodes included', () => {
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

    let myNeighbor = graph.getNeighbors(A);
    expect(myNeighbor[0].weight).toEqual(0);
  });
  it('The proper size is returned, representing the number of nodes in the graph', () => {
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

    expect(graph.size()).toEqual(4);
  });
  it('An empty graph returns null', () => {
    let graph = new Graph();
    let A = graph.addVertex('A');

    graph.addDirectedEdge(A, A);

    expect(graph.getNodes()).toEqual([{'value': 'A'}]);
  });
  it('Return a collection of nodes in the order they were visited.', () => {
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

    var myTest = graph.breadthFirst(A);

    expect(Array.from(myTest)).toEqual([{'value': 'A'}, {'value': 'B'}, {'value': 'C'}, {'value': 'D'}]);
  });
  it('Return a collection of nodes in the order they were visited, even if there is only 1.', () => {
    let graph = new Graph();
    let A = graph.addVertex('A');

    graph.addDirectedEdge(A, A);

    var myTest = graph.breadthFirst(A);

    expect(Array.from(myTest)).toEqual([{'value': 'A'}]);
  });
  it('Return an error if there is no valid node.', () => {
    let graph = new Graph();

    var myTest = graph.breadthFirst();

    expect(Array.from(myTest).join('')).toEqual('Please put a node with value.');
  });
});
