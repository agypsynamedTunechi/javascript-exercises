const fibonacci = function(num) {
    const arr = [0,1,1];
    let value = 0;
    if(num < 0){
        return "OOPS"
    }else{
    for(let i = 3; i <= num; i++){
        const value = arr[i - 1] + arr[i - 2];
        arr.push(value);
    }

    return arr[num]
    }

};

// Do not edit below this line
module.exports = fibonacci;
