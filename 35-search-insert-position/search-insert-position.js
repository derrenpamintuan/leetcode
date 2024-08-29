/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // if target is not found in nums array
    if (nums.indexOf(target) === -1) {
        // add target to nums array
        nums.push(target);
        // sort nums array in ascending order
        nums.sort((a, b) => a - b);
    }

    // return index of target in nums array
    return nums.indexOf(target);
};