/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lowerCased = s.toLowerCase()
    let alphanumeric = lowerCased.replace(/[^a-z0-9]/g, '');
    let combined = alphanumeric.replace(/\s+/g, '');
    let reversed = combined.split('').reverse().join('');

    if  (combined !== reversed) return false;
    return true;
};