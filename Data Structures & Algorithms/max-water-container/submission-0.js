class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0;
        let end = heights.length-1;
        let maxVol = 0;
        while(start<end) {
            let currentVol = Math.min(heights[start], heights[end]) * (end-start);
            if(currentVol>maxVol) maxVol = currentVol;
            if(heights[start]<heights[end]) {
                start++;
            } else {
                end--;
            }
        }
        return maxVol;
    }
}
