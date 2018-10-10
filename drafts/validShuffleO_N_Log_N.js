const stringCheck = require('./../helpers/stringCheck');


// O(nlogn)
function validShuffleO_N_Log_N(str1, str2) {
  if(!stringCheck(str1, str2)) return false;

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}


module.exports = validShuffleO_N_Log_N;