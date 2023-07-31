var gcdOfStrings = function(str1,str2) {
    //determine if str1 and str2 has the same group of letter
    if(str1 + str2 != str2 + str1) {
        return "";
    } 
    // is str1 divide my str2 has no number left, if no number left that means str1 is common factor of str2
        if(str1.length % str2.length === 0) {
            return str2;
        } else {
            let number = str1 % str2;
            gcdOfStrings(str1, str2.slice(0,number))
            }
        } 
    

   console.log( gcdOfStrings('abcabc','abc'))
   console.log( gcdOfStrings('ababab','abab'))
   console.log( gcdOfStrings('leet','code'))


