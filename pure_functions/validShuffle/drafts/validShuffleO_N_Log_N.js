const stringCheck = require('../../../helpers/stringCheck');


// O(nlogn)
function sortedString(str) {
  return str.split("").sort().join("")
}

function validShuffleO_N_Log_N(str1, str2) {
  if(!stringCheck(str1, str2)) return false;

  return sortedString(str1) === sortedString(str2);
}


module.exports = validShuffleO_N_Log_N;