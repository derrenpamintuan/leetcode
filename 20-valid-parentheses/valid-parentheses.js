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

    for (let c of s) {
        if (c === '(' || c === '{' || c === '[') {
            pairs.push(c);
        } else {
            if (!pairs.length ||
                (c === ')' && pairs[pairs.length - 1] !== '(') ||
                (c === '}' && pairs[pairs.length - 1] !== '{') ||
                (c === ']' && pairs[pairs.length - 1] !== '[')) {
                return false;
            }
            pairs.pop();
        }
    }
    return !pairs.length;
};