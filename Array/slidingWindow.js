//209 minimum size subarray sum
//this is for equal
// var minSubArrayLen = function (target, nums){
//     let minLen = +Infinity
//     let currentSum = 0
//     let currentLen = 0
//     for (let i = 0; i<nums.length; i++){

//         currentSum += nums[i]
//         currentLen ++

//         while (currentSum> target){
//             currentSum = currentSum - nums[i+1-currentLen]
//             currentLen--
            
//         }
     

//         if(currentSum === target){
//             minLen=Math.min(currentLen, minLen)
//         }
       
//         console.log('currentSum',currentSum, 'currentLen',currentLen, 'minLen', minLen)
//     }
//     if (minLen === + Infinity){
//         return 0
//     } else {
//         return minLen
//     }
    
// }
// console.log(minSubArrayLen(11,[1,2,3,4,5]))

var minSubArrayLen = function (target, nums){
    let minLen = +Infinity
    let currentSum = 0
    let currentLen = 0
    for (let i = 0; i<nums.length; i++){

        currentSum += nums[i]
        currentLen ++

        while(currentSum >= target){
            minLen=Math.min(currentLen,minLen)
            currentSum = currentSum - nums[i+1-currentLen]
            currentLen --
            console.log('currentSum',currentSum)
        }
       
        console.log('currentSum',currentSum, 'currentLen',currentLen, 'minLen', minLen)
    }
    if (minLen === + Infinity){
        return 0
    } else {
        return minLen
    }
    
}
console.log(minSubArrayLen(11,[1,2,3,4,5,12]))