/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // assign an empty obj for s letter count
    let objS={}
    // assign an empty obj for t letter count
    let objT={}
    // iterate over the s string
    for (let i = 0; i < s.length; i++){
        // if key in objS and key in objS is not equal to character at index of t return false
        if (objS[s[i]] && (objS[s[i]] !== t[i])) return false
        // assign charcter at index of t to objS at key of s at index
        objS[s[i]] = t[i]
            // if key in objT and key in objT is not equal to character at index of s return false
        if (objT[t[i]] && (objT[t[i]] !== s[i])) return false
        // assign charcter at index of s to objT at key of t at index
        objT[t[i]] = s[i]
    }
    // return true
    return true
};