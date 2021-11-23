'use strict';

const insertionSort = require('../module/insertionSort');

describe('It can successfully sort an array)', () => {

  it('returns an array sorted in numerical order', () => {
    let newArray = insertionSort([8,4,23,42,16,15]);
    expect(newArray).toEqual([4,8,15,16,23,42]);
  });
  it('returns an array if one number', () => {
    let newArray = insertionSort([8]);
    expect(newArray).toEqual([8]);
  });
  it('returns an error message if array is empty', () => {
    let newArray = insertionSort([]);
    expect(newArray).toEqual('please put in an array with values');
  });
  it('returns an array sorted that a negative number', () => {
    let newArray = insertionSort([8,4,-23,42,16,15]);
    expect(newArray).toEqual([-23,4,8,15,16,42]);
  });
  it('returns an array sorted that a 0 number', () => {
    let newArray = insertionSort([8,4,0,42,16,15]);
    expect(newArray).toEqual([0,4,8,15,16,42]);
  });

});
