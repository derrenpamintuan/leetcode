/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // assign false to done variable
    let done = false;
    // while not false
    while (!done) {
        // assign true to done
        done = true;
        // iterate over the nums variable
        for (let i = 1; i < nums.length; i += 1) {
            // if nums at index of i minus one is greater than nums at index of i
            if (nums[i - 1] > nums[i]) {
                // assign false to done
                done = false;
                // assign nunms at index of i minus one to tmp variable
                let tmp = nums[i - 1];
                // assign nums at index of i to nums at index of i minus one
                nums[i - 1] = nums[i];
                // assign tmp to nums at index of i
                nums[i] = tmp;
            }
        }
    }
};