const palindromes = function (str) {
  function removePunctuation(text) {
    return [...text].filter((char) => /[^\W_]/.test(char)).join("");
  }
  const newStr = removePunctuation(str);
  const word = newStr.split("");
  const reversed = [...word].reverse();

  const compare = (a, b) => {
    

    for (let i = 0; i < a.length; i++) {
      if (a[i].toLowerCase() !== b[i].toLowerCase()) {
        return false;
        } 
    }
    return true;
  };

  return compare(word, reversed);
};

// Do not edit below this line
module.exports = palindromes;
