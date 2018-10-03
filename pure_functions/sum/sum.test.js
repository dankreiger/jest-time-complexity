const sum = require('./sum');
const bmPerf = require('./../../helpers/bmPerf');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
  bmPerf(sum(1, 2));
});

