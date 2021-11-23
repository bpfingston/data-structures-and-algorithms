'use strict';

function insertionSort(arr) {
  if (arr.length === 0) {
    return 'please put in an array with values';
  }
  for (var i = 1; i < arr.length; i++) {
    let prev = i - 1;
    let current = arr[i];
    while (prev >= 0 && current < arr[prev]) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = current;
  }
  return arr;
}

module.exports = insertionSort;
