const add = function(a, b) {
	let total = a + b;
  return total;
};

const subtract = function(a, b) {
	let total = a - b;
  return total;
};

const sum = function(arr) {
  let sum = 0
	for(let i = 0; i < arr.length; i++){
    sum += arr[i];
   
  }
   return sum;
};

const multiply = function(arr) {
  let total = 1;
  for(let i = 0; i < arr.length; i++){
    total *= arr[i];
  }
  return total;
};

const power = function(a, b) {
	let pow = a ** b;
  return pow;
};

const factorial = function(a) {
	let fact = 1;
  for(let i = 1; i <= a; i++){
    fact *= i;
    

  }
  return fact;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
