function encode(plaintext){
    let result=[];
     
     for (let elem of plaintext ){
     let code = elem.toUpperCase().charCodeAt()-1;
     if(code<64||code>89){
       result.push(elem);
       continue
     } 
       if(code%2===0){
         result.push(0)
       } else result.push(1)
     }
     
     return result.join('')
   }