/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let last = digits.length-1
    while (last >= -1){
        if (last === -1){
            return [1,...digits]
        }
      if (digits[last]<9){
           digits[last]++
           break
       } else if(digits[last]===9){
           digits[last]= 0
           last--
       }
   }
   
   return digits
};