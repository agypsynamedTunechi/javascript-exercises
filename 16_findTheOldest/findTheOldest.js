const findTheOldest = function (arr) {
  const date = new Date()
  const oldest = arr
                .map((obj) => ({
                ...obj,
                age: typeof obj.yearOfDeath !== 'undefined' ? obj.yearOfDeath - obj.yearOfBirth : date.getFullYear() - obj.yearOfBirth
                }))
      
      function sortAge(a, b){
        return b.age - a.age;
      }

    const sorted = oldest.sort(sortAge)
      return sorted[0]


  
};

// Do not edit below this line
module.exports = findTheOldest;
