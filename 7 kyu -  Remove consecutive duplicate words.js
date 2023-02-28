const removeConsecutiveDuplicates = s => {
    s = s.split(' ');
    let result=[];
    for(let i=0; i<s.length; i++){
      if(s[i]!==s[i+1]){
        result.push(s[i])
      } else if(s[i]===s[i+1]){
        continue
      }
      
    }
    return result.join(' ')
  }