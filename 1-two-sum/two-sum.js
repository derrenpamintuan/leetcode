/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Initialize an empty object to store number indices
    const pairIdx = {};

    // Iterate over each element in the nums array
    for (let i = 0; i < nums.length; i++) {
        // Get the current number
        const num = nums[i];
        // Check if the complement (target - num) exists in pairIdx
        if (target - num in pairIdx) {
            // If it exists, return the current index and the index of the complement
            return [i, pairIdx[target - num]];
        }
        // Store the current number and its index in pairIdx
        pairIdx[num] = i;
    }    
};