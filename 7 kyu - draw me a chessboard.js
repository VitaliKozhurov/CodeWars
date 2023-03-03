function chessBoard(rows, columns) {
    let cell = true;
    const result = [];
      
      for(let i=0; i< rows;i++){
        let arr = [];
        for(let j=0;j<columns;j++){
          if(cell) arr.push('O');
          else arr.push('X');
          cell = !cell;
        }
        result.push(arr);
        if(columns%2===0){
          cell = !cell;
        }
      }
      return result;
    }