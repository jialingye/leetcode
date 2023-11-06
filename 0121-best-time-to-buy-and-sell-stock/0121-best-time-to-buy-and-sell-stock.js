/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0, right = 0
    let max = 0, hold = true, sec = 0
    while (right<prices.length){
        right ++ 
        if ((prices[right]-prices[left])>0){
            if((prices[right]-prices[left])>max ){
                max = prices[right]-prices[left]
            }
        } else {
            if (max !== 0 && sec !== 0 ){
                    hold = false
                }
            left = right
        }
    }
    return max
};