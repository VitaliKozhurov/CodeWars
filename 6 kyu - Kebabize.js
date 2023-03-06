function kebabize(str) {
    let res='';
      for(let i=0; i<str.length;i++){
        if(!isNaN(+str[i])) continue
        if(str[i]!==str[i].toLowerCase()){
          res+='-' + str[i].toLowerCase()
        } else res+=str[i]
      }
      
      if(res[0]==='-'){
        res = res.slice(1)
      }
      return res;
    }