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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        let travArr = [root];
        let result = [];
        while(travArr.length>0) {
            let arrLen = travArr.length;
            let tempArr = [];
            for(let i=0;i<arrLen;i++) {
                const node = travArr.shift();
                if(node.right) travArr.push(node.right);
                if(node.left) travArr.push(node.left);
                tempArr.push(node.val);
            }
            result.push(tempArr[0]);
        }
        return result;
    }
}
