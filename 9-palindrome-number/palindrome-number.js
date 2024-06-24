/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Convert x to a string and store it in the variable str
    let str = x.toString();
    // Split str into an array of characters and store it in the variable arr
    let arr = str.split('');
    // Reverse the order of elements in arr and store the result in the variable reversedArr
    let reversedArr = arr.reverse();
    // Join the elements of reversedArr back into a string and store it in the variable reversedStr
    let reversedStr = reversedArr.join('');
    // Convert reversedStr back to an integer and return true if reversedStr is equal to x or false if not
    return parseInt(reversedStr) === x;
};