/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // declare k variable to track elements that are returned
    let k = 0;
    // iterate over the nums array
    for(let i = 0; i < nums.length; i++){
        // if index is equal to index plus one and index plus one is equal to index plus two
        if((nums[i] === nums[i+1]) && (nums[i+1] === nums[i+2])){ 
            // skip to next iteration
            continue
        }
        // assign nums at index to nums at k variable
        nums[k] = nums[i]
        // increment k variable
        k++
    }
    // return k variable
    return k;
};