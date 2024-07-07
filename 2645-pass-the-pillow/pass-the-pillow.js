/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    // Calculate how many complete passes have occurred
    let chunks = Math.floor(time / (n - 1));
    // If the number of chunks is even, return the position of the pillow in the forward direction
    // Otherwise, return the position of the pillow in the reverse direction
    return chunks % 2 === 0 ? (time % (n - 1) + 1) : (n - time % (n - 1));
};