/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let  fast = head
    let set = new Set()
    while (fast !== null && fast.next !==null){
        if (set.has(fast)){
            return true
        } else {
            set.add(fast)
            fast = fast.next
        }
    }
    return false;
};