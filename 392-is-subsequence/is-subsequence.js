/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    // if s is longet than t, return false
    if (s.length > t.length) return false;
    // declare variable for checking each letter in s string
    let subsequence = 0;
    // loop over t string
    for (let i = 0; i < t.length; i++) {
        // if s at index of subsequence is equal to the character
        if (s[subsequence] === t[i]) {
            // increment subsequence
            subsequence++;
        }
    }
    // return true if subsequence length is equal to s length
    return subsequence === s.length
};