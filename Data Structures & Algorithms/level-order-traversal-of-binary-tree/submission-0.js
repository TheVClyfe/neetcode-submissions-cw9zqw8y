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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(root===null) return [];
        let travArr = [root];
        let result = [];
        while(travArr.length>0) {
            const arrLen = travArr.length;
            let tempArr = [];
            for(let i=0;i<arrLen;i++) {
                const pushedOut = travArr.shift();
                if(pushedOut.left) travArr.push(pushedOut.left);
                if(pushedOut.right) travArr.push(pushedOut.right);
                tempArr.push(pushedOut.val);
            }                
            result.push(tempArr);
        }
        return result;
    }
}
