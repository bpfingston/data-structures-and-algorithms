"use strict";

const Vertex = require("./vertex");

const Edge = require("./edge");

/**
 * Implements an adjacency list to store Vertices and edges
 */
class Graph {
  constructor() {
    this.adjacencyList = new Map();
    this.set = new Set();
  }

  // adding a value to our adjency
  addVertex(value) {
    let payload = new Vertex(value);
    this.adjacencyList.set(payload, []);
    this.set.add(payload);

    return payload;
  }

  // add method should specify direct vs undirected, adding a connection between vertices
  addDirectedEdge(startVertex, endVertex, weight = 0) {
    // check if the vertex exists in our list of vertices.
    if (
      !this.adjacencyList.has(startVertex) &&
      !this.adjacencyList.has(endVertex)
    ) {
      throw new Error("Vertex Error");
    }

    // what should do to add them to our adjacency values?

    // grab all edges connected to the starting vertex
    let neighbors = this.adjacencyList.get(startVertex);

    // create a new edge from our ending vertex and push it into the list of neighbors.
    let newEdge = new Edge(endVertex, weight);
    neighbors.push(newEdge);
  }

  getNodes() {
    let myArr = [];
    this.adjacencyList.forEach((key, value) => {
      myArr.push(value);
    });
    return myArr;
  }

  size() {
    if (this.adjacencyList.size === 0) {
      return null;
    }
    return this.adjacencyList.size;
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error("GET NEIGHBOR ERROR :: Invalid vertex");
    }

    // I don't want mutate this array
    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(startVertex) {
    if (!startVertex) {
      return "Please put a node with value.";
    }
    const queue = [];
    const visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);

    while (queue.length) {
      const current = queue.shift();

      // I need to see all of current nodes adjecneies
      let neighbors = this.getNeighbors(current);

      for (let edge of neighbors) {
        let neighbor = edge.vertex;

        if (!visitedNodes.has(neighbor)) {
          queue.push(neighbor);
          visitedNodes.add(neighbor);
        } else {
          continue;
        }
      }
    }
    return visitedNodes;
  }
  //require onePoint as an arguement,.....
  depthFirst(startVertex) {
    if (!startVertex) {
      return "Please put a node with value.";
    }
    let visited = new Set();
    return this.depthHelper(startVertex, visited);
  }
  //so helper.....(does this look similar to something above? weird.....)
  depthHelper(myVertex, visited) {
    visited.add(myVertex);
    let neighbors = this.getNeighbors(myVertex);
    for (let edge of neighbors) {
      let neighbor = edge.vertex;
      if (!visited.has(neighbor)) {
        this.depthHelper(neighbor, visited);
      }
      //to be fair this is no stack/queue for this one
    }
    return visited;
  }
}

module.exports = Graph;
