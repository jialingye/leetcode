
var MyStack = function() {
    this.stack = []
    this.top_element=null 
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.push(x)
    this.top_element=x
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let pop = this.stack.pop()
    this.top_element = this.stack[this.stack.length-1]
    return pop
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.top_element
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    if(this.stack.length===0){
        return true
    } else {
        return false
    }
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */