var uniqueInOrder = function (iterable) {
   let result = [];
   for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== result[result.length - 1]) {
         result.push(iterable[i])
      }
   }
   return result
}