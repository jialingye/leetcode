/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length===0){
        return 0
    }
    let fast = 0 ,slow = 0
    while (fast<nums.length){
        if(nums[fast]!==val){
            nums[slow]=nums[fast]
            slow++
        }
        fast++
    }
    return slow
};