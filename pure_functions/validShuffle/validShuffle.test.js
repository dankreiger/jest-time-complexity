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
  describe('normal inputs', () => {
    it('returns true for valid shuffled strings', () => {
      expect(validShuffle('password12345', 'dwposr4a531s2')).toBe(true);
      expect(validShuffle('rat', 'art')).toBe(true);
    });

    it('returns false for invalid shuffled strings', () => {
      expect(validShuffle('password12345', 'ssxpword12345')).toBe(false);
      expect(validShuffle('dog', 'puppy')).toBe(false);
    });

    describe('long inputs', () => {
      it('returns true for valid shuffled strings', () => {  
        expect(validShuffle(simple, shuffledSimple)).toBe(true);
        expect(validShuffle(pw1, shuffledPw1)).toBe(true);
        expect(validShuffle(pw2, shuffledPw2)).toBe(true);
      });
      it('returns false for invalid shuffled strings', () => {  
        expect(validShuffle(pw1, pw2)).toBe(false);
        expect(validShuffle(shuffledPw1, shuffledPw2)).toBe(false);
        expect(validShuffle('somethingelse1', 'somethingelse')).toBe(false);
      });
  
      // test performance with very long strongs
      it(`executes in less than 1500 milliseconds given two valid shuffled strings with ${pw2.length} characters`, () => {
        // benchmark
        let time1 = performance.now();
        validShuffle(pw2, shuffledPw2);
        let time2 = performance.now();
        expect(time2 - time1).toBeLessThan(1500)
        console.log(`Elapsed time: ${time2 - time1} milliseconds`);
      });

    })

  })


});