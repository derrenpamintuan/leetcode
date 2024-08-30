/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // remove white space around s string and assign to trimmed
    let trimmed = s.trim();
    // assign 0 to length
    let length = 0;

    // iterate over trimmed string from end to start
    for (let i = trimmed.length - 1; i >= 0; i--) {
        // if index of trimmed does not equal a space, increment length
        if (trimmed[i] !== ' ') { length++ }
        // otherwise end iteration
        else { break };
    }
    // return length variable
    return length;
};