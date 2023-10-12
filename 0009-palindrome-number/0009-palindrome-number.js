/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   str = x.toString()
   if(str.split('').reverse().join('')=== str){
       return true
   }
    return false
};