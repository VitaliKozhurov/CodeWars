function findOutlier(integers) {
   let isOdd = integers.filter(el => el % 2 === 0).length > integers.filter(el => el % 2 !== 0).length;

   if (isOdd) {
      return integers.filter(el => el % 2 !== 0)[0]
   } else return integers.filter(el => el % 2 === 0)[0]

}