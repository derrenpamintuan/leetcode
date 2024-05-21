/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    // declare a variable for keeping count of elements not equal to val
    let count = 0;

    // iterate over the nums array
    for (let i = 0; i < nums.length; i++) {
        // if nums at index is not equal to val
        if (nums[i] !== val) {
            // nums at index is assigned to nums at count
            nums[count] = nums[i];
            // increment count
            count++
        }
    }
    // return count
    return count;
}