/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedA = nums1.concat(nums2);
    let sortedA = mergedA.sort(function (a, b) { return a - b });
    let middleI = (sortedA.length - 1) / 2;
    if (sortedA.length % 2 === 0) {
      return (sortedA[middleI - .5] + sortedA[middleI + .5]) / 2;
    } else {
      return sortedA[middleI];
    }
};