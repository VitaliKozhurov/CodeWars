function trim(str, size) {
    if(size>=str.length){
      return str
    } else if(size<=3){
      return str.slice(0,size)+'...';
    }
    else{
        return str.slice(0, size-3)+'...';
    }
  }