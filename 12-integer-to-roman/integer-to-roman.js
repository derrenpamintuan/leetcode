/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    // assign roman numeral values to romanNum
    const romanNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    }
    // assign empty string to str
    var str = ''
    // iterate over the romanNum object keys
    for (var i of Object.keys(romanNum)) {
        // assign num divided by romanNum at index rounded down to q
        var q = Math.floor(num / romanNum[i])
        // subtract and assign q multiplied by romanNum at index from num
        num -= q * romanNum[i]
        // add and assign repeated string q times of i to str
        str += i.repeat(q)
    }
    // return string
    return str

};