// function mergeSortedArrays(arr1, arr2){
//     let arr=[...arr1, ...arr2]
//     arr.sort(function(a,b){ return a - b})
//     return arr
// }

// console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))

/**
 * 53 maximum subarray
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     if (nums.length === 1) {
//         return nums[0]
//     } 
//     let maxSum = nums[0]
//     let currentSum = 0

//     for (let i = 0 ; i<nums.length; i++){
//         if (currentSum < 0) {
//             currentSum = 0
//         }  
//         currentSum += nums[i]
//         maxSum = Math.max(currentSum, maxSum) 
//     }
//     return maxSum
// };

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     if (nums.length === 1){
//         return nums
//     }
//     let fast = 0, slow =0
//     while(fast < nums.length){
//         if (nums[fast] !== 0){
//             [nums[slow], nums[fast]]=[nums[fast],nums[slow]]
//             slow ++;
//         }
//         fast ++;
//     }
  
//     return nums
// };

// console.log(moveZeroes([0,1,0,3,12]))

// var rotate = function(nums, k){
//     if(nums.length === 1 || k===0){
//         return nums;
//     }
    // while(k>0){
    //     nums.unshift(nums[nums.length-1])
    //     nums.pop()
    //     k--
    // }
    // return nums
    // time exceeded error
//     k = k % nums.length
//     nums.reverse()
//     let r=k-1, l=0
//     while(r>l){
//         [nums[r],nums[l]]=[nums[l],nums[r]]
//         r--;
//         l++;
//     }

//     let rAr=nums.length-1, rAl=k
//     while(rAr>rAl){
//         [nums[rAr],nums[rAl]]=[nums[rAl],nums[rAr]]
//         rAr--;
//         rAl++;
//     }
//     return nums
// }

// console.log(rotate([1,2,3,4,5,6,7],3))

// var removeDuplicates= function (nums){
//     if(nums.length<=2 ){
//         return 0;
//     }

//     let fast=2, slow = 1
//     while(fast< nums.length){
//         if(nums[fast]!==nums[fast-2] || nums[fast]!==nums[slow-1]){
//             slow++;
//             nums[slow]=nums[fast]
//         }
//         fast++
//     }
//     return slow+1
// }

// console.log(removeDuplicates([0,0,0,0,1,1,1,1,1,2,2,3,3,4,4,4,5,5]))

// var search = function(nums, target) {
//     if (nums.includes(target)){
//         return nums.indexOf(target)
//     } else {
//         return -1
//     }
// }

// console.log(search([4,5,6,7,0,1,2], 0))

// var twoSum = function(numbers, target) {
//     let left = 0, right = numbers.length-1
//     while (numbers[right]+numbers[left] !== target){
//         if(numbers[right]+numbers[left] > target) {
//             right--
//         } else {
//             left++
//         }
//     }
//     return [left+1, right+1]
// };

// console.log(twoSum([5,25,75],100))


