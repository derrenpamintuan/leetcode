/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // if target is not found in nums, return [-1, -1]
    if (nums.indexOf(target) === -1) { return [-1, -1] };

    // assign empty array to res variable
    let res = [];
    // push the index of target in nums to res array
    res.push(nums.indexOf(target));

    // iterate over nums array from end to start
    for (let i = nums.length - 1; i >= 0; i--) {
        // if index of nums is strictly equal to target
        if (nums[i] === target) {
            // push the index to res array
            res.push(i);
            // end iteration
            break;
        }
    }
    // return res array
    return res;
};