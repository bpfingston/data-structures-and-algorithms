'use strict';

const Brackets = require('../module/brackets');


describe('testing brackets', () => {
  it('should check for matching open/close brackets in string', () => {
    let brackets = new Brackets();
    expect(brackets.validateBrackets('{}')).toBe(true);
    expect(brackets.validateBrackets('[]')).toBe(true);
    expect(brackets.validateBrackets('()')).toBe(true);
  });
  it('should pass even with extra characters that are not brackets', () => {
    let brackets = new Brackets();
    expect(brackets.validateBrackets('(bryce)')).toBe(true);
  });
  it('should pass even with multiple brackets', () => {
    let brackets = new Brackets();
    expect(brackets.validateBrackets('{([])}')).toBe(true);
  });
  it('should pass even with multiple brackets and characters between brackets', () => {
    let brackets = new Brackets();
    expect(brackets.validateBrackets('aa{bb(cc[dd]ee)ff}')).toBe(true);
  });
  it('should fail with unmatching brackets', () => {
    let brackets = new Brackets();
    expect(brackets.validateBrackets('[}')).toBe(false);
  });
  it('should fail with matching brackets and unmatching bracket', () => {
    let brackets = new Brackets();
    expect(brackets.validateBrackets('{)}')).toBe(false);
  });
  it('should fail with no brackets', () => {
    let brackets = new Brackets();
    expect(brackets.validateBrackets('bryce')).toBe(false);
  });
});
