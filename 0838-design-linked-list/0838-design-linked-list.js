
var MyLinkedList = function() {
    this.size = 0
    this.head = null
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index>=this.size || index<0) return -1
    let curr = this.head
    for (let i =0; i<index; i++){
        curr = curr.next
    }
    return curr.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new ListNode(val)
    node.next = this.head
    this.size++
    this.head = node
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let last = new ListNode(val)
    if(!this.head){
        this.head=last
    }else {
        let curr = this.head
        while(curr.next){
            curr=curr.next
        }
        curr.next = last
    }
    this.size++
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index>this.size || index<0) return
    if (index === 0){
        this.addAtHead(val)
        return
    }

    let curr = this.head
    for (let i=0; i<index-1; i++){
        curr = curr.next
    }
    let newNode = new ListNode(val)
    // let next = curr.next
    // curr.next = newNode
    // newNode.next = next
    newNode.next=curr.next
    curr.next=newNode
    this.size ++



};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
   if (index < 0 || index>=this.size) return
   if (index === 0){
       this.head = this.head.next
       this.size--
       return
   }

   let curr = this.head
   for (let i =0; i<index-1; i++){
       curr=curr.next
   }
    curr.next = curr.next.next
   this.size--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */