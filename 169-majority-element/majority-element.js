/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // declare a variable to store object
    let counts = {};
    // declare a variable and assign to null
    let majority = null;
    // iterate over the nums array
    for (let i = 0; i < nums.length; i++) {
        // assign index plus one or one to the counts variable of nums at index
      counts[nums[i]] = counts[nums[i]] + 1 || 1
    }

    // iterate over the counts object
    for (let key in counts) {
        // if majority is equal to null or counts of majority is greater than counts of key
      if (majority === null || counts[key] > counts[majority]) {
        // assign key to majority
        majority = key;
      }
    }
    // return majority
    return majority;
};