# Stacks and Queues
Made enqueue and dequeue methods for PseudoQueue instances.

## Challenge
Create a new class called pseudo queue.
    Do not use an existing Queue.
    Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
    Internally, utilize 2 `Stack` instances to create and manage the queue

## Approach & Efficiency
enqueue - Constant Complexity O(1);
dequeue - linear Complexity O(n);

## API
enqueue
    Arguments: value
    Inserts `value` into the PseudoQueue, using a first-in, first-out approach.  
dequeue
    Arguments: none
    Extracts a `value` from the PseudoQueue, using a first-in, first-out approach.  