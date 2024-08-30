/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmed = s.trim();
    let length = 0;

    for (let i = trimmed.length - 1; i >= 0; i--) {
        if (trimmed[i] !== ' ') { length++ }
        else { break };
    }
    return length;
};