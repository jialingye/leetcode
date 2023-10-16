/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    for (let i = 0 ; i<9; i++){
        let row = new Set()
        for (let j=0; j<9; j++){
            let num = board[i][j]
            if(num!=="."){
                if(row.has(num)){
                    return false
                } else {
                    row.add(num)
                }
            }
        }
    }
    for (let j=0; j<9; j++){
        let column = new Set()
        for(let i = 0; i<9; i++){
            let num = board[i][j]
            if(num!=="."){
                if(column.has(num)){
                    return false
                } else {
                    column.add(num)
                }
            }
        }
    }
    let k=0, l=0
    while(l<3){
        let square = new Set()
        for(let i = l*3; i<(l*3+3);i++){
            for(let j=k*3; j<(k*3+3); j++){
                let num=board[i][j]
                if(num !=="."){
                    if(square.has(num)){
                        return false
                    } else {
                        square.add(num)
                    }
                }
            }
        }
        k++
        if(k==3){
            l++
            k=0
        }
    }
    return true
};