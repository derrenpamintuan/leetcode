/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // sort nums array and assign it to sortedNums
    const sortedNums = nums.sort((a, b) => a - b);
    // assign 0 to missing
    let missing = 0;
    // iterate over the sortedNus array
    for (let i = 0; i < sortedNums.length; i++) {
        // if sortedNums at index is not equal to index
        if (sortedNums[i] !== i) {
            // assign index to missing
            missing = i;
            // break loop cycle
            break;
        }
        // increment missing
        missing++
    }
    // retiurn missing
    return missing;
};