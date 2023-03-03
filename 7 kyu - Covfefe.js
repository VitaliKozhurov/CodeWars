function covfefe(str){
    const arr = str.split(' ')
    if(!arr.includes('coverage')){
      return arr.join(' ')+ ' covfefe'
    } else return arr.map(el=>{
      if(el==='coverage'){
        return 'covfefe';
      } else return el
    }).join(' ')
   
   }