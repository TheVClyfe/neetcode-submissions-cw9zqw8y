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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(head === null || head.next===null) {
            return head;
        } else {
            let p = head, q = head.next;
            p.next = null;
            while(q) {
                const t = q.next;
                q.next = p;
                p = q;
                if(t===null) break;
                q = t;
            }
            return q;
        }
    }
}
