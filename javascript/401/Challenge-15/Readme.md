# Stacks and Queues

Made a funtion that looks at trees, and determines whether or not they are in post order, in order, pre order. Also made one to add numbers to a tree, and contains a number.

## Challenge

Code Challenge / New Implementation
Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
Create a Binary Tree class
Create a Binary Search Tree class

Any exceptions or errors that come from your code should be semantic, capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

## Approach & Efficiency

add - linear O(n)  
contain - linear O(n)  
preOrder - linear O(n)  
inOrder - linear O(n)  
postOrder - linear O(n)  

## API

Create a Binary Tree class  
    Define a method for each of the depth first traversals:  
        pre order  
        in order  
        post order which returns an array of the values, ordered appropriately.  
Create a Binary Search Tree class  
    This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:  
    Add  
        Arguments: value  
        Return: nothing  
        Adds a new node with that value in the correct location in the binary search tree.  
    Contains  
        Argument: value  
        Returns: boolean indicating whether or not the value is in the tree at least once.  
