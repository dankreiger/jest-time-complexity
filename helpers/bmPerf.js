const { performance } = require('perf_hooks');

function bmPerf(testExample) {
  const time1 = performance.now();
  testExample
  const time2 = performance.now();
  console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
}

module.exports = bmPerf;