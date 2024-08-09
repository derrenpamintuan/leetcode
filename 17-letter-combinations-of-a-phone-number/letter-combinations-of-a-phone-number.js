/**
 * @param {string} digits
 * @return {string[]}
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // if digits string has no length
    if (!digits.length) {
        // return empty array
        return [];
    }
    
    // assign the correct with each number to digitsToLetters variable
    const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    // assign empty array to res variable
    const res = [];
    
    // create backtrack function with the parameters index and combination 
    function backtrack(idx, comb) {
        // if index is equal to digits length
        if (idx === digits.length) {
            // ass combination to res array
            res.push(comb);
            // return function
            return;
        }
        
        // iterate over digitsToLetters at digits at index
        for (const letter of digitToLetters[digits[idx]]) {
            // use backtrack function with the arguments idx plus one and comb plus letter
            backtrack(idx + 1, comb + letter);
        }
    }
    
    // use backtrack function with the arguments 0 and empty string
    backtrack(0, "");
    
    // return res array
    return res;    
};