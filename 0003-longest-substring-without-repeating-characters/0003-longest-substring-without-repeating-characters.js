/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let valid = 0
  let storage = new Map()

  let left =0, right = 0
  while (right<s.length){
      let c=s[right]
      right++
      storage.set(c,(storage.get(c)||0)+1)
      
      while(storage.get(c)>1){
          storage.set(s[left], storage.get(s[left])-1)
          left++
         
      }
      valid = Math.max(valid, right-left)
  } 
  return valid
};