const sumAll = function (num1, num2) {
  const max = Math.max(num1, num2);
  let sum = 0;
  if (
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1, num2) || typeof(num1, num2) != "number"
  ) {
    return "ERROR";
  }
  for (let i = max; i > 0; i--) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
