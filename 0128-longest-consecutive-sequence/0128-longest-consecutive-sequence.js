/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set()
    let maxCount = 0
    for(const num of nums){
        if(!set.has(num)){
            set.add(num)
        }
    }
    for (const num of set){
        if(set.has(num-1)){
            continue
        }
        let curMin = num
        let count = 0
        while(set.has(curMin)){
            count++
            curMin+=1
        }
        if(count>maxCount){
            maxCount=count
        }
    }
    return maxCount
};