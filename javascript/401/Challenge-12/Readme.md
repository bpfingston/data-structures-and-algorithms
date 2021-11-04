# Stacks and Queues  
Made enqueue and dequeue methods for Animal Shelter Queue.  

## Challenge  
Create a class called AnimalShelter which holds only dogs and cats.  
The shelter operates using a first-in, first-out approach.  
  
## Approach & Efficiency  
enqueue - Constant Complexity O(1);  
dequeue - linear Complexity O(n);  

## API  
enqueue  
    Arguments: animal  
        `animal` can be either a dog or a cat object.  
dequeue  
    Arguments: pref  
        `pref` can be either `"dog"` or `"cat"`  
    Return: either a dog or a cat, based on preference.  
        If `pref` is not `"dog"` or `"cat"` then return null.  
