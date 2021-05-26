const repeatString = function(string, count) {

    block = '';

    if(count < 0){
        return "ERROR";
    }

    for(x=0;x<count;x++){
        block = block + string;
    }

    return block;
};

module.exports = repeatString;
