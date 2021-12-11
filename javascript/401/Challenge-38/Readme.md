# Graphs  

Implenting a graph by creating a class with methods, and ability to pass the following tests:  

1. Return a collection of nodes in the order they were visited.
2. Return a collection of nodes in the order they were visited, even if there is 1.
3. Return an error if there is no valid node.

## Challenge  

Depth first

- Arguments: Node (Starting point of search)
- Return: A collection of nodes in their pre-order depth-first traversal order
- Program output: Display the collection

## Approach & Efficiency  

Business

Time: O(|V|+|E|)  
Space: O(V)  

V = vertices  
E = edges  

Articles to conclusion: [myCheatSheet](https://static.packt-cdn.com/downloads/4874OS_Appendix_Big_O_Cheat_Sheet.pdf)  
                        [article from Khan](https://www.khanacademy.org/computing/computer-science/algorithms/breadth-first-search/a/analysis-of-breadth-first-search)  

## Solution  

[Solution/Code](https://github.com/bpfingston/data-structures-and-algorithms/blob/main/javascript/401/Challenge-38/module/graph.js);  
[Test](https://github.com/bpfingston/data-structures-and-algorithms/blob/main/javascript/401/Challenge-38/__Test__/challenge38.test.js)  
