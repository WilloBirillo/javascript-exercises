const reverseString = function(word) {
    let solution = "";
    for (let i = word.length -1 ; i>= 0; i--){
        solution += word[i];
    }
    return solution;
};

// Do not edit below this line
module.exports = reverseString;
