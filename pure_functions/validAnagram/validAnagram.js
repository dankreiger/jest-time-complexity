const validAnagramO_N = require('./drafts/validAnagramO_N');
const validAnagramO_N_Log_N = require('./drafts/validAnagramO_N_Log_N');

function validAnagram(a, b){
  // return validAnagramO_N_Log_N(a, b);
  return validAnagramO_N(a, b);
}


module.exports = validAnagram;