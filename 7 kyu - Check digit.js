function checkDigit(number, index1, index2, digit) {
   return index1 > index2 ? number.toString().slice(index2, index1 + 1).includes(digit.toString()) : number.toString().slice(index1, index2 + 1).includes(digit.toString())
};
