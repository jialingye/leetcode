// var strStr=function(haystack,needle){
//     const index=haystack.indexOf(needle);
// return index;
//   }
  
//   var strStr = function(haystack, needle) {
//     // I want to loop through the haystack and if I see the first letter, meaning index 0 of needle, matched at the current index of haystack, I'm going to loop through needle to see if the rest of the string matches.
//     for(let i = 0; i < haystack.length; i++) {
//         if(haystack[i] === needle[0]) {
//             if(needle.length === 1) return i;
//             let haystackIndex = i + 1;
//             let needleIndex = 1
//             while(haystack[haystackIndex] === needle[needleIndex]) {
//                 console.log(haystack[haystackIndex])
//                 console.log(needle[needleIndex])
//                 haystackIndex++;
//                 needleIndex++;
//                 if(needle.length === needleIndex) return i;
//             }
//         }
//     }
//     // If there's no match, return -1 at the end
//     return -1;
// };

var strStr = function (haystack,needle) {
    for (let i=0; i<haystack.length; i++) {
        if(haystack[i]===needle[0]){
            let index=i+1;
          for(let j=1; j<needle.length; j++){
            if (haystack[index]===needle[j]){
                index++;
                if(j===needle.length-1){
                    return i;
                }
            } else {
                return -1;
            }
          }
        }
    }
        return -1;

}

console.log(strStr("leetcode","leeto"))
console.log(strStr("sadbutsad","sad"))
console.log(strStr("butsad","sad"))