// var removeDuplicates = function (nums) {
//     if(nums.length ===0) {
//         return 0;
//     }
//     const slow =0, fast=0;
//     while(fast<nums.length){
//         if(nums[fast]!== nums[slow]){
//             slow++;
//             nums[slow]=nums[fast];
//         }
//         fast++;
//     }
//     return nums;
// }
// var removeDuplicates = function (nums) {
//     const size = nums. length;
//     if (size == 0) return 0;
//     let slowP = 0;
//     for (let fastP = 0; fastP < size; fastP++) {
//     if (nums[fastP] !== nums[slowP]) {
//     slowP++;
//     nums[slowP] = nums[fastP];
//     }
//     }
//     return slowP + 1;
//     };
// nums = [1,1,2];
// var k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (var i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// 
//----------------------------------------------------------------------------------------------------------------------------------------------------------
var twoSum=function(nums, target) {
    let arr=[];
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++ && i!==j){
            if(nums[i]+nums[j]===target){
                arr.push(i);
                arr.push(j);
                return arr;
            }
        }
    }
}

const ans=twoSum([3,4,5],8)
console.log(ans)
//-------------------------------------------------------------------------------------------------------------------------------------------------------------