/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0, bottom = matrix.length-1
    let left = 0, right = matrix[0].length -1
    let result = []
    const area = matrix.length* matrix[0].length
    let dir = 0
    while (result.length< area){
        if (dir === 0){
            for (let i = left; i<=right  && result.length<area; i++){
                result.push(matrix[top][i])
            }
            top++
            dir++
        }
        if(dir === 1){
            for(let i = top; i<=bottom  && result.length<area; i++){
                result.push(matrix[i][right])
            }
            right --
            dir ++
        }
        if (dir === 2){
            for (let i = right; i>= left  && result.length<area; i--){
                result.push(matrix[bottom][i])
            }
            bottom --
            dir ++
        }
        if (dir === 3){
            for (let i = bottom; i>=top  && result.length<area; i--){
                result.push(matrix[i][left])
            }
            left ++
            dir = 0
        }
        
    }
    return result
};