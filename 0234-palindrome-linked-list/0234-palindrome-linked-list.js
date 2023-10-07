/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = []
    let p = head
    while(p!==null){
        arr.push(p.val)
        p=p.next
    }
    let left = 0, right = arr.length-1
    while (right>= left){
        if(arr[right]!==arr[left]){
            return false
        }
        right--
        left++
    }
    return true
};