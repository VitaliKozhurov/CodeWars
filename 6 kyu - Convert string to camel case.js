function toCamelCase(str){
    if(str.length===0) return ''
  return str.replace(/_/g,'-').split('-').map((el,ind)=>{
    if(ind===0) return el
    else return el[0].toUpperCase() + el.slice(1)
  }).join('')
  }