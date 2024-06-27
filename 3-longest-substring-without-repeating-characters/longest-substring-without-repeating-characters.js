/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Initialize left pointer to 0
    let left = 0;
    // Initialize maxLength to 0
    let maxLength = 0;
    // Initialize an empty set charSet
    let charSet = new Set();

    // For each character in s with index right from 0 to length of s - 1:
    for (let right = 0; right < s.length; right++) {
        // While charSet contains the character at index right:
        while (charSet.has(s[right])) {
            // Remove the character at index left from charSet
            charSet.delete(s[left]);
            // Increment left pointer by 1
            left++;
        }

        // Add the character at index right to charSet
        charSet.add(s[right]);
        // Update maxLength to be the maximum of maxLength and (right - left + 1)
        maxLength = Math.max(maxLength, right - left + 1);
    }

    // Return maxLength
    return maxLength;    
};