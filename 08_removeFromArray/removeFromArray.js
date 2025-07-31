const removeFromArray = function(arr, ...arg) {
   return arr.filter((el) => !arg.includes(el));
    
};

// Do not edit below this line
module.exports = removeFromArray;
