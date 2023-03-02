function solve(s){
    let sToUpperCase = s.toUpperCase();
    let count = 0;
  for(let i=0; i<s.length; i++){
    if(s[i]===sToUpperCase[i]){
      count++
    }
  }
  return count<=s.length/2?s.toLowerCase():s.toUpperCase();
}