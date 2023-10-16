/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
   let res =0
   let leftMax =0; rightMax =0
   let left =0; right =height.length-1
   while (right> left){
       leftMax = Math.max(leftMax, height[left])
       rightMax = Math.max(rightMax, height[right])

       if(leftMax<rightMax){
           res += leftMax-height[left]
           left++
       } else {
           res += rightMax-height[right]
           right--
       }

   }
   return res
};