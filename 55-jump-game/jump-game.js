/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // get last index of nums and assign to last variable
    const last = nums.length - 1;
    // get first index to compare values and assign to index variable
    let index = nums[0];

    // if nums has one value, return true
    if (nums.length === 1) return true;
    // if index is less than or equal to 0, return false
    if (index <= 0) return false;

    // iterate over the nums array
    for (let i = 1; i < nums.length; i++) {
        // if i is equal to last, return true
        if (i === last) return true;
        // remove one from index and assign to index
        index = index - 1;

        // if nums at index is greater than index, assign nums at index to index
        if (nums[i] > index) index = nums[i];
        // if index is equal to 0, return false
        if (index === 0) return false;
    }
    // reurn true
    return true;
};