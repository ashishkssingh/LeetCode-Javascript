/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const sign = x < 0 ? -1 : 1;
  const reverse =
    Number(String(Math.abs(x)).split("").reverse().join("")) * sign;

  if (reverse < -2147483648 || reverse > 2147483647) {
    return 0;
  } else {
    return reverse;
  }
};

console.log(reverse(123));
