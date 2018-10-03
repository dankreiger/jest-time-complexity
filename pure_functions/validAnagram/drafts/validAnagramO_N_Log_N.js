const stringCheck = require('../../../helpers/stringCheck');


// O(nlogn)
function validAnagramO_N_Log_N(str1, str2) {
  if(!stringCheck(str1, str2)) return false;
  const y = str1.split("").sort().join(""),
    z = str2.split("").sort().join("");
  return z === y;
}


module.exports = validAnagramO_N_Log_N;