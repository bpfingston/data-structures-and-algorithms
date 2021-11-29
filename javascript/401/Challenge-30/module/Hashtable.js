" use strict ";

const LinkedList = require("./LinkedList");

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  // assume key is a string
  hash(key) {
    let sum = 0;
    // loop through the string
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    console.log((sum * 599) % this.size);
    return (sum * 599) % this.size;
  }

  add(key, value) {
    // hash the key to get the position
    let index = this.hash(key);

    // look at that buckets value
    let bucket = this.map[index];
    let payload = {
      [key]: value,
    };

    // if there is something there we can assume it's alinked list and append
    if (bucket) {
      bucket.append(payload);
    } else {
      // if nothing is there, let instantiate a new Linked list and add that to our bucket at our index value.
      let list = new LinkedList();
      list.append(payload);
      this.map[index] = list;
    }
  }

  // returns a boolean whether or not something is there.
  contains(key) {
    let index = this.hash(key);
    let bucket = this.map[index];

    if (bucket) {
      return true;
    } else {
      return false;
    }
  }

  // takes in a key, and returns the value or null if nothing found
  find(key) {
    let index = this.hash(key);
    let bucket = this.map[index];


    if (bucket) {
      let current = bucket.head;
      while (current) {
        if (current.value[key]) {

          return current.value[key];
        }
        current = current.next;
        if(!current){
          return null;
        }
      }
    } else {
      return null;
    }
  }
}

// let map = new HashTable(1024);
// console.log(map.hash('Bryce'));

// map.add('Bryce', 'Bryce');
// console.log(map.map[67]);

module.exports = HashTable;
