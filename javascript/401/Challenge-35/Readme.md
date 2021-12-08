# Graphs  

Implenting a graph by creating a class with methods, and ability to pass the following tests:  

1. Node can be successfully added to the graph
2. An edge can be successfully added to the graph
3. A collection of all nodes can be properly retrieved from the graph
4. All appropriate neighbors can be retrieved from the graph
5. Neighbors are returned with the weight between nodes included
6. The proper size is returned, representing the number of nodes in the graph
7. A graph with only one node and edge can be properly returned
8. An empty graph properly returns null

## Challenge  

Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:  

add node  

- Arguments: value
- Returns: The added node
- Add a node to the graph

add edge  

- Arguments: 2 nodes to be connected by the edge, weight (optional)
- Returns: nothing
- Adds a new edge between two nodes in the graph
- If specified, assign a weight to the edge
- Both nodes should already be in the Graph

get nodes  

- Arguments: none
- Returns all of the nodes in the graph as a collection (set, list, or similar)
- get neighbors

Arguments: node  

- Returns a collection of edges connected to the given node
- Include the weight of the connection in the returned collection

size  

- Arguments: none
- Returns the total number of nodes in the graph

## Approach & Efficiency  

Add Vertex  

Time: O(1)  
Space: O(|V|^2)  

Add Edge  

Time: O(1)  
Space: O(1)  

Get Node  

Time: O(|V|)  
Space: O(1)  

GetNeighbor  

Time: O(|V|)  
Space: O(1)  

Size  

Time: O(|V|+|E|)  
Space: O(|V|^2)  

Breadth  

Time: O(|V|+|E|)  
Space: O(n)  

V = vertices  
E = edges  

Articles to conclusion: [myCheatSheet](https://static.packt-cdn.com/downloads/4874OS_Appendix_Big_O_Cheat_Sheet.pdf)  
                        [article from Khan](https://www.khanacademy.org/computing/computer-science/algorithms/breadth-first-search/a/analysis-of-breadth-first-search)  

## Solution  

[Solution/Code](https://github.com/bpfingston/data-structures-and-algorithms/blob/main/javascript/401/Challenge-35/module/left-join.js);  
[Test](https://github.com/bpfingston/data-structures-and-algorithms/blob/main/javascript/401/Challenge-35/__Test__/challenge35.test.js)  
