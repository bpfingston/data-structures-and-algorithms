# Singly Linked List
<!-- Short summary or background information -->
Created Linked Lists and node classes. Added functions to insert, include, and string together different object.

## Challenge
    1.  Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
    2.  Create a Linked List class
        -   Within your Linked List class, include a head property.
        -   Upon instantiation, an empty Linked List should be created.

## Approach & Efficiency
Constant Complexity O(1) for the insert function.  
Linear Complexity O(n) for the includes funciton.  
Linear Complexity O(n) for the includes function.  

## API
insert
    Arguments: `value`
    Returns: `nothing`
    Adds a new node with that value to the head of the list with an O(1) Time performance.

includes
    Arguments: `value`
    Returns: `Boolean`
    Indicates whether that value exists as a Node’s value somewhere within the list.

toString
    Arguments: `none`
    Returns: a string representing all the values in the Linked List, formatted as:
`"{ a } -> { b } -> { c } -> NULL"`
