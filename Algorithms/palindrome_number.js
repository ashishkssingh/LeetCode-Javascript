/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const str = String(x);
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(123));
