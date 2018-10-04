const stringCheck = require('./../helpers/stringCheck');

function validShuffleO_N_another(a, b) {
  // check inputs for strings
  if(!stringCheck(a, b)) return false;

  // check that string lengths are equal
  if(a.length !== b.length) return false;

  const lookup = {};

  for (let i = 0; i < a.length; i++) {
    let letter = a[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for (let i = 0; i < b.length; i++) {
    let letter = b[i];

    // can't find letter or letter is zero, then it's not a valid shuffle
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

module.exports = validShuffleO_N_another;