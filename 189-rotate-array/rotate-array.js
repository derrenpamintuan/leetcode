/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // create helper function to reverse array to check values
  function reverse(arr, start, end) {
    // iterate over array while start index is less than end index
    while (start < end) {
        // assign array at index of end and start to array at index of start and end
      [arr[start], arr[end]] = [arr[end], arr[start]];
      // increment start
      start++;
      // decrement end
      end--;
    }
  }

    // assign remainder of the length of nums array to k
  k %= nums.length;

    // use reverse fuction to to rotate nums array to the right k times
  reverse(nums, 0, (nums.length - 1));
  reverse(nums, 0, (k - 1));
  reverse(nums, k, (nums.length - 1));
};