/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // assign empty array to res
    let res = [];
    // sort nums array into ascending order
    nums.sort((a, b) => a - b);

    // iterate over the nums array
    for (let i = 0; i < nums.length; i++) {
        // if index is greater than 0 and nums at index is equal to nums at index minus 1
        if (i > 0 && nums[i] === nums[i-1]) {
            // skip iteration
            continue;
        }
        
        // assign index plus 1 to j
        let j = i + 1;
        // assign the length of nums minus 1 to k
        let k = nums.length - 1;

        // while j is less than k
        while (j < k) {
            // assign nums at index plus nums at j index plus nums at k index
            let total = nums[i] + nums[j] + nums[k];

            // if total is greater than 0
            if (total > 0) {
                // decrement k
                k--;
                // if total is greater than 0
            } else if (total < 0) {
                // increment j
                j++;
                // otherwise
            } else {
                // add nums at i and nums at j and nums at k to res array
                res.push([nums[i], nums[j], nums[k]]);
                // increment j
                j++;

                // while nums at j is equal to nums at j minus 1 and j is less than k
                while (nums[j] === nums[j-1] && j < k) {
                    // increment j
                    j++;
                }
            }
        }
    }
    // return res array
    return res;    
};