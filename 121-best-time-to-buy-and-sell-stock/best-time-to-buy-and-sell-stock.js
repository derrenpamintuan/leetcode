/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    // assign start index to variable
    let left = 0;
    // assign iteration index to variable
    let right = 1;
    // assign a variable to track profit
    let max_profit = 0;
    // iterate over prices array
    while (right < prices.length) {
        // if prices at index of left is less than prices at index of right
        if (prices[left] < prices[right]) {
            // assign prices at index of right minus prices at index of left to a variable
            let profit = prices[right] - prices[left];
            // assign the higher number to max_profit variable
            max_profit = Math.max(max_profit, profit);
            // otherwise
        } else {
            // assign right to left variable
            left = right;
        }
        // increment right variable
        right++;
    }
    // return max_profit
    return max_profit;
};