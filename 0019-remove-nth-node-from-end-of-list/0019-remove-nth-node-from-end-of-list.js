/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head.next === null){
        return null
    }
    let len = 0
    let curr = head
    while (curr !==null){
        len++
        curr = curr.next
    }
    if (n === len){
        return head.next
    }
    curr = head
    let index = len - n
    for(let i = 0; i< index -1; i++){
        curr = curr.next
    }
    curr.next = curr.next.next
    return head
};