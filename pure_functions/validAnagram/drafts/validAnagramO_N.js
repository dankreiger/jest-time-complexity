const stringCheck = require('../../../helpers/stringCheck');

// O(n)
function validAnagramO_N(a, b){
  // check inputs for strings
  if(!stringCheck(a, b)) return false;

  // check that string lengths are equal
  if(a.length !== b.length) return false;

  // create frequency counters O(n)
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  // frequency for string a
  for(let i of a){
    frequencyCounter1[i] = (++frequencyCounter1[i]) || 1;
  }
  // frequency for string b
  for(let i of b){
    frequencyCounter2[i] = (++frequencyCounter2[i]) || 1;
  }    

  for(let key in frequencyCounter1) {
    if(frequencyCounter1[key] !== frequencyCounter2[key]){
      return false;
    }
  }
  
  // return true if everything passes
  return true;
}


module.exports = validAnagramO_N;