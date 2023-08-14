//59
var generateMatrix = function(n) {
    let matrix = Array.from(Array(n), ()=> new Array(n).fill(0))
    let count = 1, dir = 0
    let left = 0, right = n-1, top = 0, bottom = n-1
    while (count <= n*n){
        if (dir === 0){
            for(let i= left; i<= right; i++){
                matrix [top][i] = count
                count ++
            }
            top ++
            dir ++
        }
        if (dir === 1){
            for (let i = top; i<=bottom; i++){
                matrix[i][right]=count
                count ++
            }
            right --
            dir ++
        }
        if (dir === 2){
            for(let i= right; i>= left; i--){
                matrix[bottom][i]= count
                count ++ 
            }
            bottom --
            dir ++
        }
        if (dir === 3){
            for(let i = bottom; i>=top; i--){
                matrix[i][left] = count
                count++
            }
            left ++
            dir = 0
        }
    }

    return matrix;
};