const add = function(a,b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, items) => sum += items, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, items) => product *= items, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  let count = 1;
	if (n === 0 || n === 1){
    return 1;
  } else {
    for(let i = n; i > 0; i--) {
      count *= i;
    }
    return count;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
