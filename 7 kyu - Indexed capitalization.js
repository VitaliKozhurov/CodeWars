function capitalize(s,arr){
    let result=s.split('');
    for(let i of arr){
      if(result[i]){
        result[i]=result[i].toUpperCase();
      }
    }
    return result.join('');
  };