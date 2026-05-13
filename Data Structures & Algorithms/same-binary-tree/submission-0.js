/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if(p===null && q===null) return true;
        else if(p===null) return false;
        else if(q===null) return false;
        else {
            const areValsEqual = p.val === q.val;
            const isLeftEqual = this.isSameTree(p.left, q.left);
            const isRightEqual = this.isSameTree(p.right, q.right);
            return areValsEqual && isLeftEqual && isRightEqual;
        }
    }
}
