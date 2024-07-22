/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // assign strs at index 0 to pref variable
    let pref = strs[0];
    // assign the length of pref to prefLen variable
    let prefLen = pref.length;

    // iterate over the strs array
    for (let i = 1; i < strs.length; i++) {
        // assign index of stars to s variable
        let s = strs[i];
        // while pref is not equal to s at substring of 0 to prefLen
        while (pref !== s.substring(0, prefLen)) {
            // decerment prefLen variable
            prefLen--;
            // if prefLeng is equal to 0
            if (prefLen === 0) {
                // return an empty string
                return "";
            }
            // assign pref at substring of 0 to prefLeng to the pref variable
            pref = pref.substring(0, prefLen);
        }
    }
    // return pref
    return pref;    
};