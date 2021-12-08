'use strict';

const mostRepeat = require('../module/repeatChar');
const repeat = require('../module/repeatWord');

describe('testing mostRepeat', () => {
  it('should bring back true if there is no repeating characters', () => {
    var strA = 'The quick brown fox jumps over the lazy dog';
    var strB = 'I love cats';
    var strC = 'Donald the duck';

    expect(mostRepeat(strA)).toBe(false); //false
    expect(mostRepeat(strB)).toBe(true); //true
    expect(mostRepeat(strC)).toBe(false); //false
  });
});

describe('testing repeatWords', () => {
  it('should bring back a word that has been repeated the most', () => {
    var strA = 'In a galaxy far far away';
    var strB = 'Taco cat ate a taco';
    var strC = 'No. Try not. Do or do not. There is no try.';

    expect(repeat(strA)).toBe('far'); //false
    expect(repeat(strB)).toBe('taco'); //true
    expect(repeat(strC)).toBe('No'); //false
  });
});
