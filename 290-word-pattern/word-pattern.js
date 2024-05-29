/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let compareMap = new Map();
    let reverseCompareMap = new Map();
    let sArray = s.split(' ');

    if (pattern.length !== sArray.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i];
        let word = sArray[i];

        if (!compareMap.has(char) && !reverseCompareMap.has(word)) {
            compareMap.set(char, word);
            reverseCompareMap.set(word, char);
        } else if (compareMap.get(char) !== word || reverseCompareMap.get(word) !== char) {
            return false;
        }
    }
    return true;
};