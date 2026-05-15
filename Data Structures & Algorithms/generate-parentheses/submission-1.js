class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];
        const permute = (str, open, closed) => {
            if(str.length===2*n) {
                result.push(str);
            } else {
                if(open<n) {
                    permute(str+"(", open+1, closed);
                } 
                if(closed<open) {
                    permute(str+")", open, closed+1);
                }
            }
        }
        permute("", 0, 0);
        return result;
        // Initial: this doesn't work, as it misses cases starting with n = 4
        // if(n==1) {
        //     return ["()"];
        // } else {
        //     let nMinusOne = this.generateParenthesis(n-1);
        //     for(let i=0;i<nMinusOne.length;i++) {
        //         result.push("("+nMinusOne[i]+")");
        //         result.push("()"+nMinusOne[i]);
        //         result.push(nMinusOne[i]+"()");
        //     }
        //     return [...new Set(result)];
        // }
    }
}
