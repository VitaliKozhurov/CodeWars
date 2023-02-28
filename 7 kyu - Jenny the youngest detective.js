function missingWord(nums, str) {
   const sortArr = nums.sort((a, b) => a - b);
   str = str.split(' ').join('').toLowerCase();
   let result = '';
   for (let i = 0; i < sortArr.length; i++) {
      if (str[sortArr[i]]) {
         result += str[sortArr[i]].toLowerCase()
      } else return "No mission today"
   }

   return result
}