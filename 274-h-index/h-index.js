/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    // sort the citations array in ascending order
    citations.sort((a, b) => a - b)
    // initialize the result variable to 0
    let result = 0;
    // store the length of the citations array in variable n
    let n = citations.length;
    // iterate over the sorted citations array
    for(let i = 0; i < n; i++){
        // Line 6: Update the result to the maximum of the current result and the minimum of the current citation value and the number of papers that have at least this many citations (n-i)
        result = Math.max(result, Math.min(citations[i], n-i))
    }
    // return the result
    return result;
};