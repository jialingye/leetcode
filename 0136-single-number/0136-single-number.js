/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Set()
    let num = 0
    for (let i =0; i<nums.length; i++){
        if (map.has(nums[i])){
            num = num - nums[i]
        } else {
            map.add(nums[i])
            num = num + nums[i]
        }
    }
    
  return num
};