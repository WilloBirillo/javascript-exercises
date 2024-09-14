const removeFromArray = function (array, ...args) {
  //return array.filter((item) => !args.includes(item));
const new_array = [];
  array.forEach((items) => {
    if (!args.includes(items)) {
        new_array.push(items);
    }
  });
  return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
