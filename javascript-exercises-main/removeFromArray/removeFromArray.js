const removeFromArray = function(arr, first, second, third, fourth) {

    if( fourth == undefined){
        if( third == undefined){
            if(second == undefined){
                if(first == undefined){
                    return "ERROR";
                } else{
                    return arr.filter(function(ele){
                        return ele !== first;
                    });
                }
            }else{
                return arr.filter(function(ele){
                    return (ele !== first && ele !== second);
                });

            }
        }else{
            return arr.filter(function(ele){
                return (ele !== first && ele !== second && ele!== third);
            });
        }
    }else{
        return arr.filter(function(ele){
            return (ele !== first && ele !== second && ele!== third && ele !== fourth);
        });
    }
};

module.exports = removeFromArray;
