
const validShuffleO_N = require('./../../drafts/validShuffleO_N');
const validShuffleO_N_another = require('./../../drafts/validShuffleO_N_another');
const validShuffleO_N_Log_N = require('./../../drafts/validShuffleO_N_Log_N');



function validShuffle(a, b){
  return validShuffleO_N_Log_N(a, b);
  // return validShuffleO_N_another(a, b);
  // return validShuffleO_N(a, b);
}


module.exports = validShuffle;