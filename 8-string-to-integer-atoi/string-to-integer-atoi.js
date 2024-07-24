/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const noSpaces = s.trim();
  const fChar = noSpaces[0];

  if (noSpaces.length === 1 && fChar === '-' || noSpaces.length === 1 && fChar === '+') { return 0 }
  if (isNaN(fChar) && fChar !== '-' && fChar !== '+') { return 0 }

  if (noSpaces.length > 1) {
    const sChar = noSpaces[1];
    if (isNaN(fChar) && isNaN(sChar) || isNaN(fChar) && sChar === ' ') { return 0 }
  }

  if (parseInt(noSpaces) < -2147483648 ) { return -2147483648 }
  if (parseInt(noSpaces) > 2147483647 ) { return 2147483647 }

  return parseInt(noSpaces);
};