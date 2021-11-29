# Hashtables  

Implenting a hashtable, with various methods.

## Challenge  
Implement a Hashtable Class with the following methods:

- add
  - Arguments: key, value
  - Returns: nothing
  - This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get
  - Arguments: key
  - Returns: Value associated with that key in the table
- contains
  - Arguments: key
  - Returns: Boolean, indicating if the key exists in the table already.
- hash
  - Arguments: key
  - Returns: Index in the collection for that key

## Approach & Efficiency  

add:  

- Time:  O(1)
- Space: O(1)

get:  

- Time: O(1)
- Space: O(1)

contains:  

- Time: O(1)
- Space: O(1)

hash:  

- Time: O(n)
- Space: O(1)

## API  

Solution:  
[Hashtable.js](https://github.com/bpfingston/data-structures-and-algorithms/blob/main/javascript/401/Challenge-30/module/Hashtable.js)  

Test:
[My Test](https://github.com/bpfingston/data-structures-and-algorithms/blob/main/javascript/401/Challenge-30/__Test__/challenge30.test.js)
