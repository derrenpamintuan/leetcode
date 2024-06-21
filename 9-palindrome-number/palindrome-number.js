/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let arr = str.split('');
    let reversedArr = arr.reverse();
    let reversedStr = reversedArr.join('');
    return parseInt(reversedStr) === x;
};