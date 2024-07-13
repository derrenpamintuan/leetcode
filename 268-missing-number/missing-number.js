/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    let missing = 0;
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] !== i) {
            missing = i;
            break;
        }
        missing++
    }
    return missing;
};