/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   for(let i = 0; i< haystack.length; i++){
       if (haystack[i]===needle[0]){
           let index = 1
           for (j=1; j<needle.length; j++){
               if(haystack[i+j]===needle[j]){
                   index ++
               }
           }
           if(index === needle.length){
               return i
           } 
       }
   }
   return -1
}
