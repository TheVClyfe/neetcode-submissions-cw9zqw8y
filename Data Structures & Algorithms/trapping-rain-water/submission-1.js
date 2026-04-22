class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(height.length === 0) return 0;
        let n = height.length;
        let arrLeft = new Array(n).fill(0);
        let arrRight = new Array(n).fill(0);
        arrLeft[0] = height[0];
        for(let i=1;i<height.length;i++) {
            arrLeft[i] = Math.max(arrLeft[i-1], height[i])
        }
        arrRight[n-1] = height[n-1];
        for(let i=height.length-2;i>=0;i--) {
            arrRight[i] = Math.max(arrRight[i+1], height[i]);
        }
        let sum = 0;
        for(let i=0;i<height.length;i++) {
            const trapped = Math.max(0,Math.min(arrLeft[i], arrRight[i]) - height[i]);
            sum+=trapped;
        }
        return sum;
    }
}
