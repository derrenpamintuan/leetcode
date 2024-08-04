/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // assign an empty array to pairs
    let pairs = [];

    // iterate over the s string
    for (let i of s) {
        // if index of s is equal to '(', '{', or '['
        if (i === '(' || i === '{' || i === '[') {
            // add index to pairs array
            pairs.push(i);
            // otherwise
        } else {
            // if it is not equal to pairs length or
            if (!pairs.length ||
                // i is equal to ')' and pairs at last index is not equal to '(' or
                (i === ')' && pairs[pairs.length - 1] !== '(') ||
                // i is equal to '}' and pairs at last index is not equal to '{' or
                (i === '}' && pairs[pairs.length - 1] !== '{') ||
                // i is equal to ']' and pairs at last index is not equal to '['
                (i === ']' && pairs[pairs.length - 1] !== '[')) {
                    // return false
                return false;
            }
            // remove last index of pairs array
            pairs.pop();
        }
    }
    // return true if not equal to pairs length
    return !pairs.length;
};