/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    // loop over string
  for (let char of magazine) {
    // replace the char from magazine in ransomNote with empty string
    ransomNote = ransomNote.replace(char, "");
  }

  // if ransomNote is empty return true
  if (!ransomNote) return true;
  // otherwise return false
  else return false;
};