"use strict";

function itsJustBusiness(graph, arr) {
  var price = 0;

  if (arr.length === 1) {
    return `False, $${price}`;
  }

  for (var i = 0; i < arr.length; i++) {
    let myNodes = graph.getNodes();
    let current = myNodes.filter(city => city.value === arr[i])[0];

    if (!current) {
      return `False, $${price}`;
    }

    let edges = graph.getNeighbors(current);
    let cityNeighbor = edges.filter(
      city => city.vertex.value === arr[i + 1]
    )[0];

    if (cityNeighbor) {
      price = (price + cityNeighbor.weight);
    } else if (i === arr.length - 1) {
      return `True, $${price}`;
    } else {
      return `False, $${price}`;
    }
  }
}

module.exports = itsJustBusiness;
