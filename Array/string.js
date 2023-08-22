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

var kidsWithCandies = function(candies, extraCandies) {
    let result = []
    let max = Math.max(...candies)
    console.log(max)
    for (let i = 0; i<candies.length; i++){
        if (candies[i]+extraCandies>=max){
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
};

console.log(kidsWithCandies([2,3,5,1,3], 3))