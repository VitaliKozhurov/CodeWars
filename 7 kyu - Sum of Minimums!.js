function sumOfMinimums(arr) {
    let sum=0;
  for(let elem of arr){
    let min = Math.min(...elem);
    sum+=min
  }
    return sum;
  }