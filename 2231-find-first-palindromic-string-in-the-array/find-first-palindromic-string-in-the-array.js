/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    // iterate over the words array
    for (let i = 0; i < words.length; i++) {
        // assign words at index to word
        let word = words[i];
        // reverse word by splitting between each character then use reverse method and join each character
        let reverse = word.split('').reverse().join('');
        // if word is equal to reverse
        if (word === reverse) {
            // return word
            return word;
        }
    }
    // return empty string
    return '';
};