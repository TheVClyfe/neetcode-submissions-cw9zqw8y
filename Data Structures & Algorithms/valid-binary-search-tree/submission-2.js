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
     * @return {boolean}
     */
    isValidBST(root) {
        const validateBST = (root, min = -1001, max = 1001 ) => {
            if(!root) return true;

            if(root.val<=min || root.val>=max) {
                return false;
            }

            return validateBST(root.left, min, root.val) && validateBST(root.right, root.val, max);
        }
        // INITIAL THOUGHTS - This only takes care of local, not global situations
        // if(!root) return true;
        // else {
        //     if(root.left && root.val <= root.left.val) return false;
        //     if(root.right && root.val >= root.right.val) return false;
        //     return this.isValidBST(root.left) && this.isValidBST(root.right);
        // }
        return validateBST(root);
    }
}
