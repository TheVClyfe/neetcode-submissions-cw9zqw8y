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
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;
        const calculateHeight = (node) => {
            if(node===null) return 0;
            else {
                const heightLeft = calculateHeight(node.left);
                const heightRight = calculateHeight(node.right);
                
                maxDiameter = Math.max(maxDiameter, heightLeft + heightRight);
                return 1 + Math.max(heightLeft, heightRight);
            }
        }
        calculateHeight(root);
        return maxDiameter;
    }
}
