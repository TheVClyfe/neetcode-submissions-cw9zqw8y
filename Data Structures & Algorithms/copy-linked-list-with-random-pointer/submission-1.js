// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(head===null) return null;
        let map = new Map();
        let p = head;
        while(p) {
            map.set(p, new Node(p.val));
            p = p.next;
        }
        p = head;
        while(p) {
            const node = map.get(p);
            const next = p.next === null? null : map.get(p.next);
            const random = p.random === null? null: map.get(p.random);
            if(node) {
                node.next = next;
                node.random = random;
            }
            p = p.next;
        }

        return map.get(head);
    }
}
