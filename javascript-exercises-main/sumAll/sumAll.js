const sumAll = function(start, end) {

    var answer = 0;

    if(typeof start !== 'number'){
        return "ERROR";
    }
    if(typeof end !== 'number'){
        return "ERROR";
    }
    if(end<0 || start <0){
        return "ERROR";
    }

    if(end > start){
        for(x=start;x<=end;x++){
            answer = answer + x;
        }
    }else{
        for(x=start;x>=end;x--){
            answer = answer + x;
        }
    }

    return answer;
};

module.exports = sumAll;
