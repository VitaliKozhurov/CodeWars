function reverseLetter(str) {
   let res = '';
   for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
         res += str[i]
      }
   }
   return res.split('').reverse().join('')
}