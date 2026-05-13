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
     * @param {TreeNode} root
     * @return {number}
     */
    depth = 0;

    traverseWithDepthCalc(root, depth) {
        if(root===null) return depth;
        const leftDepth = this.traverseWithDepthCalc(root.left, depth+1);
        const rightDepth = this.traverseWithDepthCalc(root.right, depth+1);
        return leftDepth > rightDepth? leftDepth: rightDepth;
    }

    maxDepth(root) {
        if(root===null) return this.depth;
        const leftDepth = this.traverseWithDepthCalc(root.left, this.depth+1);
        const rightDepth = this.traverseWithDepthCalc(root.right, this.depth+1);
        return leftDepth > rightDepth? leftDepth: rightDepth;
    }
}
