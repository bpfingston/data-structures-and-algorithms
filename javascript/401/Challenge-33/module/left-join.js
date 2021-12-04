'use strict';

const leftJoin = (hash1, hash2) => {
  var arr = [];

  if (hash1.size <= 0 || hash2.size <= 0) {
    if (hash1.size <= 0 && hash2.size > 0) {
      return 'Please put a valid hashmap into hash 1';
    } else if (hash1.size > 0 && hash2.size <= 0) {
      return 'Please put a valid hashmap into hash 2';
    } else {
      return 'Please put 2 valid hashmaps.';
    }
  }

  if (hash1.size > 0 && hash2.size > 0) {
    hash1.forEach((value, key) => {
      let mergedEntry = [key, value];
      hash2.get(key)
        ? mergedEntry.push(hash2.get(key))
        : mergedEntry.push(null);

      arr.push(mergedEntry);
    });
    return arr;
  }
};

module.exports = leftJoin;
