const validAnagramO_1 = require('./drafts/validAnagramO_1');
const validAnagramO_N_Log_N = require('./drafts/validAnagramO_N_Log_N');

function validAnagram(a, b){
  // return validAnagramO_N_Log_N(a, b);
  return validAnagramO_1(a, b);
}


module.exports = validAnagram;