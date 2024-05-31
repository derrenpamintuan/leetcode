/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // assign the map constructor to a variable for comparison
    let compareMap = new Map();
    // assign the map constructor to a variable for comparison
    let reverseCompareMap = new Map();
    // turn s string into an array and assign to a variable
    let sArray = s.split(' ');

    // if pattern length does not equal sArray length
    if (pattern.length !== sArray.length) {
        // return false
        return false;
    }

    // iterate over pattern string and sArray array
    for (let i = 0; i < pattern.length; i++) {
        // assign pattern at index of i for readability
        let char = pattern[i];
        // assign sArray at index of i for readability
        let word = sArray[i];

        // if compareMap does not have char and reverseCompareMap does not have word
        if (!compareMap.has(char) && !reverseCompareMap.has(word)) {
            // use set method of compareMap and pass in char and word
            compareMap.set(char, word);
            // use set method of reversCompareMap and pass in word and char
            reverseCompareMap.set(word, char);
            // otherwise if char of comparMap is not equal word or word of reverseCompareMap is not equal to char
        } else if (compareMap.get(char) !== word || reverseCompareMap.get(word) !== char) {
            // return false
            return false;
        }
    }
    // return true
    return true;
};