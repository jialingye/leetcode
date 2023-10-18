/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let m = {}
    for (let str of strs){
        let sorted = str.split("").sort().join("")
        if(!m[sorted]){
            m[sorted]=[str]
        } else {
            m[sorted].push(str)
        }
    }
    return Object.values(m)
};