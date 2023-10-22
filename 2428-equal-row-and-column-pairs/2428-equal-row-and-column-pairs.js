/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let row = new Map()
    let col = new Map()
    let rowArr, colArr, rowNum, colNum
    let ans = 0
    for (let i = 0; i<grid.length; i++){
        rowArr = []
        colArr = []
        for (let j = 0; j<grid.length; j++){
            rowArr.push(grid[i][j])
            colArr.push(grid[j][i])
        }
        rowNum = rowArr.join(',')
        colNum = colArr.join(',')

        row.set(rowNum, (row.get(rowNum) || 0)+1)
        col.set(colNum, (col.get(colNum) || 0)+1)
    }
 
    for (const[key, value] of row ){
        if (col.has(key)){
            ans = ans+value*col.get(key)
        }
    }
    return ans 
};