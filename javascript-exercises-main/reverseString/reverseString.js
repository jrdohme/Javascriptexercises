const reverseString = function(string) {
    var length = string.length;
    var reverseString = '';

    for(x=0;x<=length;x++){
        reverseString = reverseString + string.substr(length-x,1);
    }

    return reverseString;
};

module.exports = reverseString;
