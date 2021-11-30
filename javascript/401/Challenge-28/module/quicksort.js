'use strict';

function quickSort(arr, left, right) {
  if(arr.length === 0){
    return 'please use an array with integers';
  }
  if (left < right) {
    var position = partition(arr, left, right);

    //sort the left
    quickSort(arr, left, position - 1);

    //sort the right
    quickSort(arr, position + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let low = left;

  //check value of each point in arr for greater than or lesser than the pivot to set pivot where it needs to be.
  for(let i = low; i < right; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, low);
      low++;
    }
  }
  //swap the position of pivot with first number that is larger than the pivot.
  let temp = arr[low];
  arr[low] = arr[right];
  arr[right] = temp;
  return low ;
}

function swap(arr, i, low) {
  let temp;

  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

module.exports = quickSort;
