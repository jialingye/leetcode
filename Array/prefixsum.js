// var stringMatching = function(words) {
//     let sub =[];
//     for (let i = 0; i < words.length; i++){
//         const filterArr = words.filter((_,index)=>index !== i)
//         for(let j = 0; j<filterArr.length; j++){
//             if(filterArr[j].indexOf(words[i])>=0){
//                 if(!sub.includes(words[i])){
//                     sub.push(words[i])
//                 }
//             }
            
//         }
//     }
//     return sub;
// };

// // function stringMatching(arr){
// //     let sub={};
// //     for(let i =0; i< arr.length; i++){
// //       const filterArr = arr.filter((_,index) => index !==i);
// //       for(let j = 0; j<filterArr.length; j++){
// //         if(filterArr[j].indexOf(arr[i])>=0){
// //             if(!Object.keys(sub).includes(arr[i])){
// //                sub[arr[i]]=[filterArr[j]]
// //             } else {
// //                sub[arr[i]].push(filterArr[j])
// //             }    
// //         }
// //       }
// //     }
// //     return sub;
// //   }
  
//   console.log(stringMatching(["mass","ma", "as", "sass", "hero", "superhero"]))
//   // ['as', 'hero']
//   console.log(stringMatching(["leetcode", "et", "code"]))
//   // ['et', 'code']
//   console.log(stringMatching(["blue", "green", "bu"]))
//   // []

  var productExceptSelf = function(nums) {
    let product = 1
    let productZero=1
    let zeroCount = 0
    let answer = []
    for(const num of nums){
        if (num !== 0){
            productZero =productZero*num
            zeroCount ++
        }
        product = product*num
    }
    console.log(productZero, product, zeroCount)
    zeroCount = nums.length-zeroCount
    for(let i= 0; i<nums.length; i++){
        if(nums[i]===0 && zeroCount===1){
            answer.push(productZero)
            console.log(productZero)
        } else if (nums[i]===0 && zeroCount!==1){
            answer.push(0)
        } else{
            let producti=product*((nums[i]**(-1)))
            answer.push(producti)
        }
    }
    return answer
};

console.log(productExceptSelf([0,0]))