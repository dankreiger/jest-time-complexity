const {
  performance
} = require('perf_hooks');
const validAnagram = require('./validAnagram');
const {
  simple,
  shuffledSimple,
  pw1,
  shuffledPw1,
  pw2,
  shuffledPw2
} = require('./passwords/passwords');

describe('validAnagram', () => {
  it('returns true for valid anagrams', () => {
    expect(validAnagram(simple, shuffledSimple)).toBe(true);
    expect(validAnagram(pw1, shuffledPw1)).toBe(true);
    expect(validAnagram(pw2, shuffledPw2)).toBe(true);
  });

  it('returns false for invalid anagrams', () => {
    expect(validAnagram(pw1, pw2)).toBe(false);
    expect(validAnagram(shuffledPw1, shuffledPw2)).toBe(false);
    expect(validAnagram('somethingelse1', 'somethingelse')).toBe(false);
  });


  // test performance with very long strongs
  it(`executes in less than 8 milliseconds given two valid anagrams with ${pw1.length} characters`, () => {
    // expect to be an anagram
    expect(validAnagram(pw1, shuffledPw1)).toBe(true);
    
    // benchmark
    let time1 = performance.now();
    validAnagram(pw1, shuffledPw1);
    let time2 = performance.now();
    expect((time2 - time1)).toBeLessThan(8)
    console.log(`Elapsed time: ${time2 - time1} milliseconds`);
  });

});