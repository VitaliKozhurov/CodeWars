function kaCokadekaMe(word) {
   const vowel = ['a', 'e', 'i', 'o', 'u'];
   let result = 'ka';
   for (let i = 0; i < word.length; i++) {
      if (vowel.includes(word[i].toLowerCase()) && !word[i + 1]) {
         result += word[i];
      } else if (vowel.includes(word[i].toLowerCase()) && vowel.includes(word[i + 1].toLowerCase())) {
         result += word[i]
         continue
      } else if (vowel.includes(word[i].toLowerCase()) && !vowel.includes(word[i + 1].toLowerCase())) {
         result += word[i] + 'ka'
      } else {
         result += word[i]
      }
   }
   return result;
}