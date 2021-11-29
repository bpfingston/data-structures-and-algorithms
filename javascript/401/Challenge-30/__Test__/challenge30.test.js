'use strict';

const HashTable = require('../module/Hashtable');
const Node = require('../module/Node');

describe('Can successfully implement a HashTable', () => {
  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    let myHash = new HashTable(1024);
    myHash.add('Bryce', 'student');

    expect(myHash.map[67].head.value).toEqual({ Bryce: 'student' });
  });
  it('Retrieving based on a key returns the value stored', () => {
    let myHash = new HashTable(1024);
    myHash.add('Bryce', 'student');
    expect(myHash.find('Bryce')).toEqual('student');
  });
  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    let myHash = new HashTable(1024);
    myHash.add('Bryce', 'student');
    expect(myHash.find('ecyrb')).toEqual(null);
    expect(myHash.find('ecyrB')).toEqual(null);
  });
  it('Successfully handle a collision within the hashtable', () => {
    let myHash = new HashTable(1024);
    myHash.add('Bryce', 'student');
    myHash.add('ecyrB', 'abetterName');

    expect(myHash.map[67].head.next.value).toEqual({ ecyrB: 'abetterName' });
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let myHash = new HashTable(1024);
    myHash.add('Bryce', 'student');
    myHash.add('ecyrB', 'abetterName');

    expect(myHash.map[67].head.value['Bryce']).toEqual('student');
    expect(myHash.map[67].head.next.value['ecyrB']).toEqual('abetterName');
  });
  it('Successfully hash a key to an in-range value', () => {
    let myHash = new HashTable(1024);

    expect(myHash.hash('Bryce')).toEqual(67);
  });
  it('Successfully returns a boolean to see if key exist', () => {
    let myHash = new HashTable(1024);
    myHash.add('Bryce', 'student');

    expect(myHash.contains('Bryce')).toEqual(true);
    expect(myHash.contains('ecyrb')).toEqual(false);
  });
});
