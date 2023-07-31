// var pivotIndex = function (nums) {
//     let leftSum = 0;
//     let rightSum = 0;
//     for (let i=0; i< nums.length; i++){
//         if(i === 0 ){
//             if(nums.slice(1).reduce((a,b) => a + b, 0) === 0){
//                 return i;
//             }
//         } else if ( i===nums.length-1){
//             if(nums.slice(0, i).reduce((a,b) => a + b, 0) === 0){
//                 console.log("last"+rightSum)
//                 return i;
//             }
//         } else {
//             leftSum = nums.slice(0,i).reduce((a,b)=>a+b,0)
//             rightSum = nums.slice(i+1).reduce((a,b) => a+b, 0)
//             console.log("leftSum"+ leftSum, "rightSum"+rightSum)
//             if( leftSum === rightSum){
//                 return i;
//             }
//         }
        
//     }
//     return -1; 
// }

var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((total,current) => total + current, 0)
    for (let i = 0; i < nums.length ; i++){
        rightSum -= nums[i]
        if( leftSum === rightSum) {
            return i
        }
        leftSum += nums[i]
    }
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]))
console.log(pivotIndex([1,2,3]))
console.log(pivotIndex([2,1,-1]))



