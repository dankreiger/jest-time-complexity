function stringCheck(a, b) {
  if ((typeof a !== 'string') || (typeof b !== 'string')) {
    return false;
  }
  return true;
}

module.exports = stringCheck;