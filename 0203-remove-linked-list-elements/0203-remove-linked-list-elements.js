/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head === null){
        return head
    }
    if (head.next === null && head.val === val){
        return null
    } 
    let res = head
    while (head.next !== null){
        if (res && res.val === val){
            res = res.next
        } else if (head.next.val === val){
            head.next = head.next.next
        }
        else {
            head = head.next
        }
       
    }
    return res
};