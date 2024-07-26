/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    // delete any white space before the first character and last character of the string and assign to a noSpaces
    const noSpaces = s.trim();
    // assign the first index of noSpaces to fChar variable
    const fChar = noSpaces[0];

    // if the length of noSpaces is equal to one and fCharr is a minus or plus sign, return 0
    if (noSpaces.length === 1 && fChar === '-' || noSpaces.length === 1 && fChar === '+') { return 0 }
    // if fChar is not a number and it is not equal to a minus or plus sign, return 0
    if (isNaN(fChar) && fChar !== '-' && fChar !== '+') { return 0 }
    // if noSpaces length is greater than one
    if (noSpaces.length > 1) {
        // assign the second index of noSpaces to sChar
        const sChar = noSpaces[1];
        // if fChar is not a number and sChar is not a number or fchar is not a number and sChar is a space, return 0
        if (isNaN(fChar) && isNaN(sChar) || isNaN(fChar) && sChar === ' ') { return 0 }
    }

    // if the integer of noSpaces is greater than -2^31, return -2^31
    if (parseInt(noSpaces) < -2147483648) { return -2147483648 }
    // if the integer of noSpaces is greater than 2^31 - 1, return 2^31 - 1
    if (parseInt(noSpaces) > 2147483647) { return 2147483647 }

    // return the integer of noSpaces
    return parseInt(noSpaces);
};