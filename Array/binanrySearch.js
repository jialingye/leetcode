// var searchRange = function(nums,target){
//     if (nums.length===0){
//         return [-1,-1]
//     }
//     return [leftRange(nums,target),rightRange(nums,target)]
// }

// function leftRange(nums,target){
//     let left = 0, right = nums.length-1
//     while (left <= right) {
//         let mid = left + Math.floor((right-left)/2)
//         console.log('leftRange: left',left,'mid',mid,'right',right)
//         if(nums[mid]>target){
//             right = mid -1
//         } else if(nums[mid]<target){
//             left = mid+1
//         } else if (nums[mid]===target){
//             right= mid-1
//         }

//     }
//     if (left > nums.length || nums[left]!== target){
//         return -1
//     }
//     return left 
// }

// function rightRange(nums,target){
//     let left = 0, right=nums.length-1
//     while(left<=right){
//         let mid=left + Math.floor((right-left)/2)
//         console.log('rightRange: left',left,'mid',mid,'right',right)
//         if(nums[mid]>target){
//             right=mid-1
//         }else if (nums[mid]<target){
//             left=mid+1
//         }else if (nums[mid]===target){
//             left=mid+1
//         }
//     }
//     if (right< 0 || nums[right]!==target){
//         return -1;
//     }
//     return right
// }

// console.log(searchRange([5,7,7,8,8,8,8,9,9,9,10], 8))

// var search= function (nums, target){
//     let left = 0, right = nums.length-1
//     while(right>=left){
//         let mid = left+Math.floor((right-left)/2)
//         console.log('left',left,'mid',mid,'right',right )
//         if(nums[mid]===target){
//             return mid
//         } else if (nums[mid]>target){
//             right = mid - 1
//         } else if (nums[mid]<target){
//             left = mid +1
//         } 
//     }
//     return -1
// }

// console.log(search([-1,0,1,2,3,5,6,7,8,9,12], 9))

// console.log(search([-2,-1,0,1,2,3,5,6,7,8,9,12], 9))

// console.log(search([-2,-1,0,1,2,3,5,6,7,8,9,12], 6))
