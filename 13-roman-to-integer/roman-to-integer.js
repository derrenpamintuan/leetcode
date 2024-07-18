/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // assign roman symbols and values to an object variable
    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    // assign 0 to result variable
    let result = 0;

    // iterate over the s string
    for (let i = 0; i < s.length; i++) {
        // assign sym at curent value to cur variable
        const cur = sym[s[i]];
        // // assign sym at next of current value to next variable
        const next = sym[s[i + 1]];

        // if cur is less than next
        if (cur < next) {
            // add and increment next minus cur to the result variable
            result += next - cur;
            // increment i
            i++;
            // otherwise
        } else {
            // add and increment cur to result variable
            result += cur;
        }
    }
    // return result
    return result;
};