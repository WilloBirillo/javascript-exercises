const removeFromArray = function(array, ...args) {
    for (const arg of args) {
        array.splice(array.indexOf(arg), 1);
    }
    return array;
};
/*
const args = arguments;
    const array = args[0];
    array.splice(array.indexOf(args[1]), 1);
    return array;
    */
// Do not edit below this line
module.exports = removeFromArray;
