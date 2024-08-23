/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.indexOf(target) === -1) { return [-1, -1] };

    let res = [];
    res.push(nums.indexOf(target));

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === target) {
            res.push(i);
            break;
        }
    }
    return res;
};