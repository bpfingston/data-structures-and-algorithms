"use strict";

const Graph = require("../module/graph");
const myTrip = require("../module/business");

describe("Can use graph", () => {
  let graph = new Graph();

  let Pandora = graph.addVertex("Pandora");
  let Arendelle = graph.addVertex("Arendelle");
  let Metroville = graph.addVertex("Metroville");
  let NewMonstropolis = graph.addVertex("New Monstropolis");
  let Narnia = graph.addVertex("Narnia");
  let Naboo = graph.addVertex("Naboo");

  graph.addDirectedEdge(Pandora, Arendelle, 150);
  graph.addDirectedEdge(Pandora, Metroville, 82);

  graph.addDirectedEdge(Arendelle, Pandora, 150);
  graph.addDirectedEdge(Arendelle, Metroville, 99);
  graph.addDirectedEdge(Arendelle, NewMonstropolis, 42);

  graph.addDirectedEdge(Metroville, Pandora, 150);
  graph.addDirectedEdge(Metroville, Arendelle, 99);
  graph.addDirectedEdge(Metroville, Narnia, 37);
  graph.addDirectedEdge(Metroville, Naboo, 26);
  graph.addDirectedEdge(Metroville, NewMonstropolis, 105);

  graph.addDirectedEdge(NewMonstropolis, Arendelle, 42);
  graph.addDirectedEdge(NewMonstropolis, Metroville, 105);
  graph.addDirectedEdge(NewMonstropolis, Naboo, 73);

  graph.addDirectedEdge(Narnia, Metroville, 37);
  graph.addDirectedEdge(Narnia, Naboo, 250);

  graph.addDirectedEdge(Naboo, Narnia, 250);
  graph.addDirectedEdge(Naboo, Metroville, 26);
  graph.addDirectedEdge(Naboo, NewMonstropolis, 73);

  let firstTrip = ["Metroville", "Pandora"];
  let secondTrip = ["Arendelle", "New Monstropolis", "Naboo"];
  let thirdTrip = ["Naboo", "Pandora"];
  let fourthTrip = ["Narnia", "Arendelle", "Naboo"];

  it("Returns True and price, if trip is possible.", () => {
    expect(myTrip(graph, firstTrip)).toEqual("True, $150");
    expect(myTrip(graph, secondTrip)).toEqual("True, $115");
  });
  it('Returns False and price, if trip is not possible.', () => {
    expect(myTrip(graph, thirdTrip)).toEqual('False, $0')
    expect(myTrip(graph, fourthTrip)).toEqual('False, $0')
  })
  it('Returns False and price, if trip has only 1 city', () => {
    let newTrip1 = ['Pandora']
    let newTrip2 = ['Arendelle']

    expect(myTrip(graph, newTrip1)).toEqual('False, $0')
    expect(myTrip(graph, newTrip2)).toEqual('False, $0')
  })
});
