function arraysSimilar(arr1, arr2) {
   if (arr1.length !== arr2.length) return false;

   const ar1 = arr1.sort((a, b) => a - b);
   const ar2 = arr2.sort((a, b) => a - b);

   for (let i = 0; i < ar1.length; i++) {
      if (ar1[i] !== ar2[i]) return false
   }
   return true
}