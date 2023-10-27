/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
      let map = new Map()
    let arr = new Array(nums.length)
    let result = []
    for (const num of nums){
        map.set(num, (map.get(num)||0)+1)
    }
    for (const [key, value] of map){
        if (!arr[value-1]){
            arr[value-1]=[]
            arr[value-1].push(key)
        } else {
            arr[value-1].push(key)
        }
    }
    let len = arr.length-1

    while (k>0){
        if(!arr[len]){
            len--
        } else {
            result.push(...arr[len])
            k=k-arr[len].length
            if(len===0){
                break
            }
            len--
        }
    }
    return result
};