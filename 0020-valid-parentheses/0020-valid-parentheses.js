/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let match = {")":"(", "]":"[", "}":"{"}
    for (const char of s){
        if(char ==="(" || char ==="[" || char ==="{"){
            stack.push(char)
        } else if (stack.length && match[char]===stack[stack.length-1]){
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
};