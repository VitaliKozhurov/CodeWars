function pairZeros(arr) {
    let isDeleteZero = false;
      const result = [];
      for (let i=0;i<arr.length; i++){
        if(arr[i]===0&&!isDeleteZero){
          result.push(arr[i]);
          isDeleteZero=true;
        } else if(arr[i]===0&&isDeleteZero){
          isDeleteZero=false;
          continue
        } else{
          result.push(arr[i]);
        }
      }
      return result
    }