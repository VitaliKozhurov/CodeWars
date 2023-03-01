Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
    value : function numberOfOccurrences(element) {
      return this.reduce((tot,curr)=>{
        if(element===curr){
          tot+=1
        } 
        return tot
      },0)
    }
  });