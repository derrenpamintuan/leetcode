/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // turns string to lowercase
    let lowerCased = s.toLowerCase()
    // removes special characters
    let alphanumeric = lowerCased.replace(/[^a-z0-9]/g, '');
    // removes spaces between characters
    let combined = alphanumeric.replace(/\s+/g, '');
    // reverses string to compare
    let reversed = combined.split('').reverse().join('');

    // if string is not equal to reversed string, return false
    if  (combined !== reversed) return false;
    // returns true if statement returned true
    return true;
};