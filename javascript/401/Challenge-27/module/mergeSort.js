'use strict';


function mergeSort(arr){

        const n = arr.length;

        if(n > 1){
            const mid = n/2;
            const left = arr[0, mid];
            const right = arr[mid, n];

            mergeSort(left);
            mergeSort(right);
            merge(left, right, arr)
        }

};

function merge(left, right, arr){

    const i = 0;
    const j = 0;
    const k = 0;

    while(i < left.length && j < right.length){
        if(left[i] <= right[j]){
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }
    if(i = left.length){
        for(var a = 0; a < arr.length; a++ ){
            right.push(arr[a]);
        }
    } else {
        for(var a = 0; a < arr.length; a++ ){
            left.push(arr[a]);
        }
    }

}

module.exports = mergeSort;

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
