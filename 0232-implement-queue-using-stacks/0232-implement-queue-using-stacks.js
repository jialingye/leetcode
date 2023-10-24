
var MyQueue = function() {
    this.queue=[]
    this.length = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue=[...this.queue, x]
    this.length++
    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let app = []
    let last = this.queue[0]
    for(let i = 1; i<this.length; i++){
        app=[...app, this.queue[i]]
    }
    this.queue=app
    this.length--
    return last
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let peek = this.queue[0]
    return peek
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.length===0){
        return true
    } else {
        return false
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */