/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // assign 0 to variable to track output
    let output = 0;
    // assign first element of prices array to variable to track current price
    let currentPrice = prices[0];

    // iterate over prices array
    for (let i = 1; i < prices.length; i++) {
        // assign prices at index to variable for readability
        const price = prices[i];

        // if price is less than prices at index minus one
        if (price < prices[i - 1]) {
            // subtract currentPrice from prices at index minus one then add and assign to ouput
            output += prices[i - 1] - currentPrice;
            // assign price to currentPrice
            currentPrice = price;
        }
    }

    // if prices at index of prices length minus one is greater than or equal to prices at index of prices length minus two
    if (prices[prices.length - 1] >= prices[prices.length - 2]) {
        // subract currentPrice from prices at index of prices length minus one then add and assign to output
        output += prices[prices.length - 1] - currentPrice;
    }
    // return output
    return output;
};