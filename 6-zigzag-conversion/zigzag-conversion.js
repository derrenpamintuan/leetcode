/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // if numRows is equal to 1 or numRows is equal to or less than s length
    if (numRows === 1 || numRows >= s.length) {
        // return s
        return s;
    }

    // assign 0 to idx and 1 to d
    let idx = 0, d = 1;
    // assign a new array class of numRows of the fill method of the map method for each character to rows
    const rows = new Array(numRows).fill().map(() => []);

    // iterate over each character os the s string
    for (const char of s) {
        // push each character into rows at idx
        rows[idx].push(char);
        // if idx is 0
        if (idx === 0) {
            // assign 1 to d
            d = 1;
            // else if idx is equal to numRows minus 1
        } else if (idx === numRows - 1) {
            // assign -1 to d
            d = -1;
        }
        // increment idx with d
        idx += d;
    }

    // iterate over the numRows array
    for (let i = 0; i < numRows; i++) {
        // assign rows at index joined together with empty string to rows at index
        rows[i] = rows[i].join('');
    }

    // return rows joined together with an empty string
    return rows.join('');    
};