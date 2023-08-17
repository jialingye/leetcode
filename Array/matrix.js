//59
// var generateMatrix = function(n) {
//     let matrix = Array.from(Array(n), ()=> new Array(n).fill(0))
//     let count = 1, dir = 0
//     let left = 0, right = n-1, top = 0, bottom = n-1
//     while (count <= n*n){
//         if (dir === 0){
//             for(let i= left; i<= right; i++){
//                 matrix [top][i] = count
//                 count ++
//             }
//             top ++
//             dir ++
//         }
//         if (dir === 1){
//             for (let i = top; i<=bottom; i++){
//                 matrix[i][right]=count
//                 count ++
//             }
//             right --
//             dir ++
//         }
//         if (dir === 2){
//             for(let i= right; i>= left; i--){
//                 matrix[bottom][i]= count
//                 count ++ 
//             }
//             bottom --
//             dir ++
//         }
//         if (dir === 3){
//             for(let i = bottom; i>=top; i--){
//                 matrix[i][left] = count
//                 count++
//             }
//             left ++
//             dir = 0
//         }
//     }

//     return matrix;
// };

// var spiralOrder = function(matrix) {
//     let top = 0; bottom = matrix.length-1
//     let left = 0; right = matrix[0].length -1
//     let result = []
//     const area = matrix.length* matrix[0].length
//     let dir = 0
//     while (result.length < area){
//         if (dir === 0){
//             for (let i = left; i<=right && result.length<area; i++){
//                 console.log(dir,'count',result.length, 'push', matrix[top][i])
//                 result.push(matrix[top][i])
            
//             }
//             top++
//             dir++
           
//         }
//         if(dir === 1){
//             for(let i = top; i<=bottom  && result.length<area; i++){
//                 console.log(dir,'count',result.length, 'push', matrix[i][right])
//                 result.push(matrix[i][right])
                
//             }
//             right --
//             dir ++
//         }
//         if (dir === 2){
//             for (let i = right; i>= left  && result.length<area; i--){
//                 console.log(dir,'count',result.length, 'push', matrix[bottom][i])
//                 result.push(matrix[bottom][i])
               
//             }
//             bottom --
//             dir ++
//         }
//         if (dir === 3){
//             for (let i = bottom; i>=top  && result.length<area; i--){
//                 console.log(dir,'count',result.length, 'push', matrix[i][left])
//                 result.push(matrix[i][left])
                
//             }
//             left ++
//             dir = 0
//         }
        
//     }
//     return result
// };

// var spiralOrder = function(matrix) {
//     let top = 0, bottom = matrix.length-1
//     let left = 0, right = matrix[0].length -1
//     let result = []
//     const area = matrix.length* matrix[0].length
//     let dir = 0
//     while (result.length< area){
//         if (dir === 0){
//             for (let i = left; i<=right  && result.length<area; i++){
//                 result.push(matrix[top][i])
//             }
//             top++
//             dir++
//         }
//         if(dir === 1){
//             for(let i = top; i<=bottom  && result.length<area; i++){
//                 result.push(matrix[i][right])
//             }
//             right --
//             dir ++
//         }
//         if (dir === 2){
//             for (let i = right; i>= left  && result.length<area; i--){
//                 result.push(matrix[bottom][i])
//             }
//             bottom --
//             dir ++
//         }
//         if (dir === 3){
//             for (let i = bottom; i>=top  && result.length<area; i--){
//                 result.push(matrix[i][left])
//             }
//             left ++
//             dir = 0
//         }
        
//     }
//     return result
// };



//console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))

var rotate = function(matrix) {
    for (let i = 0; i<matrix.length; i++){
        for(let j = i; j<matrix[0].length; j++){
            let temp = matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=temp
            //console.log('i',i, 'j', j, 'j,i',matrix[j][i], 'i,j',matrix[i][j])
            //console.log(matrix)
        }
    }
console.log(matrix)
 
    for(let i = 0; i<matrix.length; i++){
        let left = 0, right = matrix[0].length-1
        while(right>left){
            [matrix[i][left], matrix[i][right]]=[matrix[i][right], matrix[i][left]]
            left++;
            right--
        }
    }
    return matrix
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))

var reverseWords = function(s) {
    return s.split(' ').map(item=>item.trim()).filter(item=>item!=='').reverse().join(' ')
 };