/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // Check if n is greater than zero and if n is a power of two
    // if n is not equal to 0 and (n AND (n - 1)) is equal to 0: return true
    // otherwise return false
    return n > 0 && ((n & (n - 1)) === 0);
};