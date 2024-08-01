/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let pairs = [];

    for (let i of s) {
        if (i === '(' || i === '{' || i === '[') {
            pairs.push(i);
        } else {
            if (!pairs.length ||
                (i === ')' && pairs[pairs.length - 1] !== '(') ||
                (i === '}' && pairs[pairs.length - 1] !== '{') ||
                (i === ']' && pairs[pairs.length - 1] !== '[')) {
                return false;
            }
            pairs.pop();
        }
    }
    return !pairs.length;
};