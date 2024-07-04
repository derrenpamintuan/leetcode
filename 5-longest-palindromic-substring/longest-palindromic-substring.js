/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    function expandAroundCenter(s, left, right) {
        /* While left is greater than or equal to 0 and right is less
        than length of s and s[left] equals s[right]: */
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // Decrement left by 1
            left--;
            // Increment right by 1
            right++;
        }
        // return right - left - 1
        return right - left - 1;
    }

    // Initialize start to 0
    let start = 0;
    // Initialize end to 0
    let end = 0;

    // For each character i in s:
    for (let i = 0; i < s.length; i++) {
        // Set odd to expandAroundCenter(s, i, i)
        const odd = expandAroundCenter(s, i, i);
        // Set even to expandAroundCenter(s, i, i + 1)
        const even = expandAroundCenter(s, i, i + 1);
        // Set max_len to maximum of odd and even
        const max_len = Math.max(odd, even);

        // if max_len is greater than end minus start
        if (max_len > end - start) {
            // assign start to round down to the nearest integer
            start = i - Math.floor((max_len - 1) / 2);
            // assign end to round down to the nearest integer
            end = i + Math.floor(max_len / 2);
        }
    }

    // return substring from start to end index plus 1
    return s.substring(start, end + 1);    
};