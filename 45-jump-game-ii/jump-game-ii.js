/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let length = nums.length - 1;
    let curr = -1;
    let next = 0;
    let min = 0;
    for (let i = 0; next < length; i++) {
        if (i > curr) min++, curr = next;
        next = Math.max(next, nums[i] + i);
    }
    return min;
};