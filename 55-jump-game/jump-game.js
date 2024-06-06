/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const last = nums.length - 1;
    let index = nums[0];

    if (nums.length === 1) return true;
    if (index <= 0) return false;

    for (let i = 1; i < nums.length; i++) {
        if (i === last) return true;
        index = index - 1;

        if (nums[i] > index) index = nums[i];
        if (index === 0) return false;
    }

    return true;
};