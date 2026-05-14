/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let p = l1;
        let q = l2;
        let sum = 0, carry = 0;
        let r = null;
        let head = null;
        while(!(p===null && q===null)) {
            sum = carry + (p === null ? 0: p.val) + (q===null? 0 : q.val);
            carry = Math.floor(sum/10);
            const mod = Math.floor(sum%10);
            if(r===null) {
                r = new ListNode(mod, null);
                head = r;
            } else {
                const node = new ListNode(mod, null);
                r.next = node;
                r = r.next;
            }
            if(p) p = p.next;
            if(q) q = q.next;            
        }
        if(carry) {
            const node = new ListNode(carry, null);
            r.next = node;
        }
        return head;
    }
}
