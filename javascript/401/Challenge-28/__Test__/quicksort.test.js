'use strict';

const quickSort = require('../module/quicksort');

describe('It can successfully sort an array)', () => {

  it('returns an array sorted in numerical order', () => {
    let newArr = [8,4,23,42,16,15];
    expect(quickSort(newArr, 0, newArr.length - 1)).toEqual([4,8,15,16,23,42]);
  });
  it('returns an error message if array is empty', () => {
    let newArr = [];
    expect(quickSort(newArr, 0, newArr.length - 1)).toEqual('please use an array with integers');
  });
  it('returns an array if one number', () => {
    let newArr = [8];
    expect(quickSort(newArr,0, newArr.length - 1)).toEqual([8]);
  });
  it('returns an array sorted that has a negative number', () => {
    let newArr = [8,4,-23,42,16,15];
    expect(quickSort(newArr,0, newArr.length - 1)).toEqual([-23,4,8,15,16,42]);
  });
  it('returns an array sorted with similar numbers.', () => {
    let newArr = [11,23,65,2,11,2];
    expect(quickSort(newArr,0, newArr.length - 1)).toEqual([2, 2, 11, 11, 23, 65]);
  });
});
