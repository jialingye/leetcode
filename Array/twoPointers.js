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


//844

// var backspaceCompare = function (s,t){
//     let sfast = 0, sslow = 0
//     sArr = s.split('')
//     tArr = t.split('')
//     while (sfast< sArr.length){
//         if (sArr[sfast]!=='#'){
//             sArr[sslow]=sArr[sfast]
//             sslow ++
//         } else {
//             sslow --
//         }
//         sfast ++
//     }
//     let tfast = 0, tslow=0
//     while (tfast< tArr.length){
//         if (tArr[tfast]!=='#'){
//             tArr[tslow]=tArr[tfast]
//             tslow++
//         } else {
//             tslow === 0? 0: tslow --
//         }
//         tfast ++ 
//     }
// console.log('tslow',tslow, 'sslow',sslow, 'tArr',tArr, 'sArr',sArr)
//     if (tslow === sslow ){
//         for (let i = 0; i<= tslow-1; i++){
//             if (tArr[i]!==sArr[i]){
//                 return false
//             }
//         }
//         return true
//     } else {
//         return false
//     }
// }

// console.log(backspaceCompare('y#fo##f','y#f#o##f'))

//88 merge sorted array
// var merge = function(nums1, m, nums2, n) {
//     let onefast = m-1 
//     let twofast = n-1
//     while (m>0 || n> 0){
//         if(nums2[twofast]>=nums1[onefast]){
//             nums1[m+n-1]=nums2[twofast]
//             twofast--
//             n--
//         } else if ( twofast<0){
//             nums1[m+n-1]=nums1[onefast]
//             onefast--
//             m--
//         } else if (onefast<0){
//             nums1[m+n-1]=nums2[twofast]
//             twofast--
//             n--
//         }
//         else {
//             nums1[m+n-1]=nums1[onefast]
//             onefast--
//             m--
//         }

//     } 
//     return nums1
// };

// console.log(merge([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 0, [-50,-50,-48,-47,-44,-44,-37,-35,-35,-32,-32,-31,-29,-29,-28,-26,-24,-23,-23,-21,-20,-19,-17,-15,-14,-12,-12,-11,-10,-9,-8,-5,-2,-2,1,1,3,4,4,7,7,7,9,10,11,12,14,16,17,18,21,21,24,31,33,34,35,36,41,41,46,48,48], 63))

//977
// var sortedSquares = function(nums) {
//     let left = 0, right = nums.length-1
//     let n = nums.length-1
//     let res= []
//     while (right>=left){
//         if (Math.abs(nums[right])>=Math.abs(nums[left])){
//             res[n]=nums[right]*nums[right]
//             right --
//             n--
//         } else {
//             res[n]=nums[left]*nums[left]
//             left++
//             n--
//         }
//     }
//     return res
// };

// console.log(sortedSquares([-7,-3,2,3,11]))

//541


// var reverseStr = function(s, k) {
//     let arr = s.split('')
//     let left = 0; right = k 
//     while (right<=s.length){
//         if (right%(2*k)!== 0){
//             let start = left, end = right-1
//             while (start<end){
//                 [arr[start], arr[end]]=[arr[end], arr[start]]
//                 start++
//                 end--
//                 console.log('start',start, arr[start], 'end',end, arr[end], 's',arr)
//             }
//         }
//     if(right+k<=s.length){
//         right+=k
//         left+=k
//         console.log(right)
//     } else if(right<s.length-1 && right+k>s.length && right%(2*k)===0){
//         right = s.length
//         left +=k
//     } else {
//         right+=k
//     }
    
//     }
//     return arr.join('')
// };

// console.log(reverseStr("abcdefg", 4))

// var addSpaces = function(s, spaces) {
//     let arr = new Array(s.length+spaces.length)
//     let sR= s.length-1, spaceR= spaces.length-1, arrR= arr.length-1
//     while(sR>=0){
//         if(sR!==spaces[spaceR]){
//             arr[arrR]=s[sR]
//             sR--
//             arrR--
//         } else {
//             arr[arrR]=s[sR]
//             arr[arrR-1]=" "
//             arrR=arrR-2
//             sR--
//             spaceR--
//         }
//     }
//     return arr.join('')
// };

// console.log(addSpaces('spacing', [0,1,2,3,4,5,6]))

var intToRoman= function (num){
    let numSplit, deductNum=0, exp=1
    let romanStr = ""
    while (deductNum <num ){
        numSplit = (num-deductNum)%(10**exp)
        deductNum += numSplit
        romanStr = converStr(numSplit)+romanStr
        console.log (numSplit, romanStr)
        exp++
    }

    return romanStr
}

var converStr= function (numSplit){
    let romanStr 
    if( 0<=numSplit && numSplit<4){
        romanStr = 'I'.repeat(numSplit)
    } else if(numSplit===4){
        romanStr = 'IV'
    } else if (5<=numSplit && numSplit<9){
        romanStr = 'V'+'I'.repeat(numSplit-5)
    } else if ( numSplit===9){
        romanStr = 'IX'
    } else if (10<=numSplit && numSplit<40){
        romanStr = 'X'.repeat(numSplit/10) 
    } else if (numSplit===40){
        romanStr = 'XL'
    } else if (50<=numSplit && numSplit<90){
        romanStr = 'L'+'X'.repeat(numSplit/10-5)
    } else if (numSplit===90){
        romanStr = 'XC'
    } else if (100<=numSplit && numSplit<400){
        romanStr = 'C'.repeat(numSplit/100)
    } else if ( numSplit===400){
        romanStr = 'CD'
    } else if (500<=numSplit && numSplit<900){
        romanStr = 'D'+'C'.repeat(numSplit/100-5)
    } else if (numSplit===900){
        romanStr = 'CM'
    } else if (1000<=numSplit && numSplit<4000){
        romanStr = 'M'.repeat(numSplit/1000)
    }
    return romanStr
}


//console.log(intToRoman(3994))
//console.log((3994%1000)/1)