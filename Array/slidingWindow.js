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

// var minSubArrayLen = function (target, nums){
//     let minLen = +Infinity
//     let currentSum = 0
//     let currentLen = 0
//     for (let i = 0; i<nums.length; i++){

//         currentSum += nums[i]
//         currentLen ++

//         while(currentSum >= target){
//             minLen=Math.min(currentLen,minLen)
//             currentSum = currentSum - nums[i+1-currentLen]
//             currentLen --
//             console.log('currentSum',currentSum)
//         }
       
//         console.log('currentSum',currentSum, 'currentLen',currentLen, 'minLen', minLen)
//     }
//     if (minLen === + Infinity){
//         return 0
//     } else {
//         return minLen
//     }
    
// }
// console.log(minSubArrayLen(11,[1,2,3,4,5,12]))

// var lengthOfLongestSubstring = function(s){
//     let sArr = s.split('')
//     let maxLen = 0, currentLen = 0

//     for (let i =0; i<sArr.length; i++){
//         if (nums[i+1] !== num[i]){
//             currentLen++
//             maxLen = Math.max(maxLen, currentLen)
//         } else {
//             maxLen = Math.max(maxLen, currentlen)
//             currentLen = 0
//         }
//     }
// }

//438. Find all anagrams in a string

// var findAnagrams = function(s,p){
//     let need = new Map()
//     let res = []
//     for(const char of p){
//         need.set(char, (need.get(char)||0)+1)
//     }
//     console.log(need)
//     let left = 0, right = 0, valid = 0
//     let window = new Map()
//     while (right<s.length){
//         let c=s[right]
//         right++
//         if(need.has(c)){
//             window.set(c, (window.get(c)||0)+1)
//             if (window.get(c)===need.get(c)){
//                 valid++
//             }
//         }
//         while(right-left>=p.length){
//             if (valid===need.size){
//                 res.push(left)
//             }
//             const d= s[left]
//             left ++
//             if(window.has(d)){
//                 if(window.get(d)===need.get(d)){
//                     valid --
//                 }
//                 window.set(d,window.get(d)-1)
//             }
           
//         }
        
//     }
//     return res
// }

// console.log(findAnagrams('ababab', 'ab'))

///76

var minWindow = function(s, t) {
    let need = new Map()
    for(const char of t){
        need.set(char, (need.get(char)||0)+1)
    }
    let left = 0, right =0 , valid=0
    let window = new Map()
    let minStr = Infinity
    let result = ''
    while(right<=s.length){
        let c=s[right]
       if (need.has(c)){
            window.set(c,(window.get(c)||0)+1)
            if (window.get(c)===need.get(c)){
                valid ++
            }
        }
        right++
        console.log('left',left,'right',right,'valid',valid, 'minStr', minStr, 'result', result)
        while(valid === need.size){
            if (minStr > right-left){
                minStr = right-left
                result = s.substring(left, right)
            }
            let d=s[left]
            left ++
            if(need.has(d)){
                if(window.get(d)===need.get(d)){
                    valid--
                }
                window.set(d, window.get(d)-1)
            }
            console.log('while loop: left',left,'right',right,'valid',valid, 'minStr', minStr, 'result', result)
        }
    }
    return minStr === Infinity? "": result
};

console.log(minWindow("ADOBECODEBANC", "ABC"))