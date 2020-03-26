/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let pointer = new ListNode(0);
    let r = pointer;
    let carry = 0;
    while (l1 != null || l2 != null) {
        let x = l1 === null? 0: l1.val;
        let y = l2 === null? 0: l2.val;
        r.next = new ListNode((carry+x+y)%10);
        r = r.next;
        if ((carry+x+y)>9) {
            carry = 1;
        } else {
            carry = 0;
        }
        if (l1 != null) {
            l1 = l1.next;
        }
        if (l2 != null) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        r.next = new ListNode(1);
    }

    return pointer.next;
};