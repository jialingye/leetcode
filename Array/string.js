// var gcdOfStrings = function(str1, str2) {
//     if (str1 + str2 !== str2 + str1) return ""
//     let commonFactor = (a,b)=>b===0? a: commonFactor(b, a%b)
//     let strEnd = commonFactor(str1.length, str2.length)
//     console.log(strEnd)
//     return str1.substring(0, strEnd)
//  };

//  var reverseVowels = function(s) {
//     sArr=s.split('')
//     let left = 0, right = s.length-1
//     let vowels = new Set(['a','e','i','o','u','A','E','I','O','U'])
//     while (right>left){
//         if (vowels.has(sArr[right]) && vowels.has(sArr[left]) ){
//             console.log('has right and left')
//             [sArr[right], sArr[left]]=[sArr[left],sArr[right]]
//             right--
//             left ++
//         } else if (!vowels.has(sArr[left])){
//             console.log('has right not left')
//             left++
//         } else {
//             right--
//         }
//     }
//     return sArr.join('')
// };

// console.log(reverseVowels('hello'))

// var kidsWithCandies = function(candies, extraCandies) {
//     let result = []
//     let max = Math.max(...candies)
//     console.log(max)
//     for (let i = 0; i<candies.length; i++){
//         if (candies[i]+extraCandies>=max){
//             result.push(true)
//         } else {
//             result.push(false)
//         }
//     }
//     return result
// };

// console.log(kidsWithCandies([2,3,5,1,3], 3))

// var canPlaceFlowers = function(flowerbed, n) {
//     let right = 0 
//     let valid = 0
//     while (right<flowerbed.length){
//         if(right===0 && flowerbed[right]===0 && flowerbed[right+1]===0){
//             if(n===0){
//                 break
//             }
//             n--
//         } else if (right===flowerbed.length-2 && flowerbed[right]===0 && flowerbed[right+1]===0){
//             if(n===0){
//                 break
//             }
//             n--
//         } else if (flowerbed[right]===0){
//             console.log('valid',valid, n)
//             valid++
//             if (valid===3){
//                 if(n===0){
//                     break
//                 }
//                 n--
//             } else if(valid>3){
//                 if ((valid-3)%2===0){
//                     if (n===0){
//                         break
//                     }
//                     n--
//                 }
//             }

//         } else {
//             valid = 0
//         }
//         right++
//     }
//     console.log('n',n)
//     return n===0
// };

// console.log(canPlaceFlowers([1,0,0,0,0,0,0,0,1], 3))

var closeStrings = function(word1, word2) {
    if (word1.length != word2.length) return false
    if (word1 == word2) return true

    arr1 = Array(26).fill(0)
    arr2 = Array(26).fill(0)

    for (let i = 0; i < word1.length; i++) {
        arr1[word1.charCodeAt(i) - 97] ++
        arr2[word2.charCodeAt(i) - 97] ++        
    }    

    console.log(arr1, arr2)

    for (let i = 0; i < word1.length; i++) {
        if (arr1[i] > 0 && arr2[i] == 0) return false
        if (arr2[i] > 0 && arr1[i] == 0) return false        
    }        

    str1 = arr1.sort((a, b) => a - b).join('')
    str2 = arr2.sort((a, b) => a - b).join('')

    if (str1 == word1.length) return false

    return str1 == str2    
};

console.log(closeStrings("cabbba","aabbbc"))

var isPalindrome = function(s) {
    newStr=s.toLowerCase()
    newStr=newStr.split(" ").join('')
    newStr=newStr.replace(/[^\w\s]|_/g,"")
    let left =0, right=newStr.length-1
    while(right>left){
        if(newStr[right]!==newStr[left]){
            return false
        }
        left++
        right--
    }
    return true
};