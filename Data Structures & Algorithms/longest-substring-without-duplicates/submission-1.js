class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let maxLength = 0;
        let left = 0;
        let right = 0;
        while(right<s.length) {
            let char = s.charAt(right);
            if(!map.has(char)) {
                map.set(char);
                right++;
                maxLength = Math.max(maxLength, right-left);
            } else {
                map.delete(s.charAt(left));
                left++;
            }
        }
        return maxLength;
    }
}
