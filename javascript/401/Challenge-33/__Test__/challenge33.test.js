'use strict';

const leftJoin = require('../module/left-join');

describe('Can successfully implement a merging of maps', () => {
  it('can combine the key pairs of two different hashmaps, resulting in 1 map.', () => {
    let hash1 = new Map();
    hash1.set('fond', 'enamored');
    hash1.set('wrath', 'anger');
    hash1.set('diligent', 'employed');
    hash1.set('outfit', 'garb');
    hash1.set('guide', 'usher');
    let hash2 = new Map();
    hash2.set('fond', 'averse');
    hash2.set('wrath', 'delight');
    hash2.set('diligent', 'idle');
    hash2.set('guide', 'follow');
    hash2.set('flow', 'jam');

    expect(leftJoin(hash1, hash2)).toStrictEqual([['fond', 'enamored', 'averse'], ['wrath', 'anger', 'delight'], ['diligent', 'employed', 'idle'], ['outfit', 'garb', null], ['guide', 'usher', 'follow']]);
  });
  it('will result in an error when map1 has no values', () => {
    let hash1 = new Map();
    let hash2 = new Map();
    hash2.set('fond', 'averse');
    hash2.set('wrath', 'delight');
    hash2.set('diligent', 'idle');
    hash2.set('guide', 'follow');
    hash2.set('flow', 'jam');

    expect(leftJoin(hash1, hash2)).toStrictEqual('Please put a valid hashmap into hash 1');
  });
  it('will result in an error when map2 has no values', () => {
    let hash1 = new Map();
    hash1.set('fond', 'enamored');
    hash1.set('wrath', 'anger');
    hash1.set('diligent', 'employed');
    hash1.set('outfit', 'garb');
    hash1.set('guide', 'usher');
    let hash2 = new Map();

    expect(leftJoin(hash1, hash2)).toStrictEqual('Please put a valid hashmap into hash 2');
  });
  it('will result in an error when both hashmap has no value', () => {
    let hash1 = new Map();
    let hash2 = new Map();

    expect(leftJoin(hash1, hash2)).toStrictEqual('Please put 2 valid hashmaps.');
  });
  it('If no matches in the second map, then only the key pairs in the first one is brought through', () => {
    let hash1 = new Map();
    hash1.set('Tony', 'Stark');
    hash1.set('Steve', 'Rogers');
    hash1.set('Bruce', 'Banner');
    hash1.set('Thor', 'Odinson');
    hash1.set('Natasha', 'Romanav');
    let hash2 = new Map();
    hash2.set('Clint', 'Barton');
    hash2.set('Nick', 'Fury');
    hash2.set('Buckey', 'Barnes');
    hash2.set('James', 'Rhodes');
    hash2.set('Wanda', 'Maximoff');

    expect(leftJoin(hash1, hash2)).toStrictEqual([['Tony', 'Stark', null], ['Steve', 'Rogers', null], ['Bruce', 'Banner', null], ['Thor', 'Odinson', null], ['Natasha', 'Romanav', null]]);
  });
});
