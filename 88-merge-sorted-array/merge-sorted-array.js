/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // assign index length for elements from nums1
    let index1 = m - 1;
    // assign index length for elements from nums2
    let index2 = n - 1;
    // assign index length for merged elements from nums1 and nums2
    let mergedIndex = m + n - 1;

    // iterate over the conditions while index1 is greater than or equal to 0 and index2 is greater than or equal to 0
    while (index1 >= 0 && index2 >= 0) {
        // if nums1 at index of index1 is greater than nums1 at index of index2
        if (nums1[index1] > nums2[index2]) {
            // nums1 at index of index1 is assigned to nums1 at index of merged index
            nums1[mergedIndex] = nums1[index1];
            // decrement index
            index1--;
            // otherwise
        } else {
            // nums2 at index of index2 is assigned to nums1 at index of merged index
            nums1[mergedIndex] = nums2[index2];
            // decrement index2
            index2--;
        }
        // decrement mergedIndex
        mergedIndex--;
    }

    // iterate over the condition while index2 is greater than or equal to 0
    while (index2 >= 0) {
        // nums2 at index of index2 is assigned to nums1 at index of mergedIndex
        nums1[mergedIndex] = nums2[index2];
        // decrement index2
        index2--;
        // decrement mergedIndex
        mergedIndex--;
    }
}
