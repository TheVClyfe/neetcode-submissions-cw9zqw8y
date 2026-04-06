class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [1];
        let suffix = [1];
        let res = [];
        for(let i=1;i<nums.length;i++) {
            prefix.push(prefix[i-1]*nums[i-1]);
        }
        for(let i=nums.length-2;i>=0;i--) {
            suffix.push(suffix[suffix.length-1]*nums[i+1]);
        }
        for(let i=0;i<prefix.length;i++) {
            res.push(prefix[i]*suffix[suffix.length-1-i]);
        }
        return res;
    }
}
