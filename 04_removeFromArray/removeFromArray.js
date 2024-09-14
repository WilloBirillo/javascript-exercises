const removeFromArray = function(array, numb) {
    const spliced = array.toSpliced((numb -1), 1);
    return spliced;
};

// Do not edit below this line
module.exports = removeFromArray;
