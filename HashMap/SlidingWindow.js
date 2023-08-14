//187
// var findRepeatedDnaSequences = function(s) {
//     let res = [];
//     let window = new Map();
//     for (let i =0 ; i<s.length-9; i++){
//         let dna=s.substring(i,i+10)
//         window.set(dna, (window.get(dna)||0)+1 )

//         if (window.get(dna)===2){
//             res.push(dna)
//         }
//     }
//     return res;
// };

// 904
var totalFruit = function(fruits) {
    let window = new Map()
    let maxFruit = 0
    let right=0, left = 0
    while (right <=fruits.length){  
            let p = fruits[right]
            window.set(p, (window.get(p)||0)+1)
            if(right-left >maxFruit){
                maxFruit = right - left
            }
            right++
            console.log('add left', left, 'right', right, 'maxFruit', maxFruit, window.size)

        while (window.size >2){
            console.log('shrink left', left, 'right', right, 'maxFruit', maxFruit,'window',window.size)
            let d = fruits[left]
            window.set(d, window.get(d)-1)
            if (window.get(d)=== 0){
                window.delete(d);
            }
            left ++
        }

    }
    return maxFruit;
};
console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4,4,3,3,4]))