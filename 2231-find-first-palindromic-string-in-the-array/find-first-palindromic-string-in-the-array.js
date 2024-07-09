/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let reverse = word.split('').reverse().join('');
        if (word === reverse) {
            return word;
        }
    }
    return '';
};