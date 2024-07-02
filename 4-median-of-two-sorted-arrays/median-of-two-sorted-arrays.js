/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Merge the two input arrays
    let mergedA = nums1.concat(nums2);
    // Sort the merged array in ascending order
    let sortedA = mergedA.sort(function (a, b) { return a - b });
    //# Calculate the middle index
    let middleI = (sortedA.length - 1) / 2;
    // Check if the length of the sorted array is even
    if (sortedA.length % 2 === 0) {
        // Return the average of the two middle elements
      return (sortedA[middleI - .5] + sortedA[middleI + .5]) / 2;
    } else {
        // Return the middle element
      return sortedA[middleI];
    }
};