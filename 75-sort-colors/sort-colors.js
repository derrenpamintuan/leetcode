/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < nums.length; i += 1) {
            if (nums[i - 1] > nums[i]) {
                done = false;
                let tmp = nums[i - 1];
                nums[i - 1] = nums[i];
                nums[i] = tmp;
            }
        }
    }
};