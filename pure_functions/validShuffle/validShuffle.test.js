const {
  performance
} = require('perf_hooks');
const validShuffle = require('./validShuffle');
const {
  simple,
  shuffledSimple,
  pw1,
  shuffledPw1,
  pw2,
  shuffledPw2
} = require('./passwords/passwords');

describe('validShuffle', () => {
  it('returns true for valid anagrams', () => {
    expect(validShuffle(simple, shuffledSimple)).toBe(true);
    expect(validShuffle(pw1, shuffledPw1)).toBe(true);
    expect(validShuffle(pw2, shuffledPw2)).toBe(true);
  });

  it('returns false for invalid anagrams', () => {
    expect(validShuffle(pw1, pw2)).toBe(false);
    expect(validShuffle(shuffledPw1, shuffledPw2)).toBe(false);
    expect(validShuffle('somethingelse1', 'somethingelse')).toBe(false);
  });


  // test performance with very long strongs
  it(`executes in less than 1 second given two valid anagrams with ${pw2.length} characters`, () => {
        // benchmark
    let time1 = performance.now();
    validShuffle(pw2, shuffledPw2);
    let time2 = performance.now();
    expect((time2 - time1) / 1000).toBeLessThan(1)
    console.log(`Elapsed time: ${(time2 - time1) / 1000} seconds`);
  });

});