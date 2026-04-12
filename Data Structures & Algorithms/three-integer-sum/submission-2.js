class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
        nums.sort((a, b) => a - b);
        for(let i=0;i<nums.length-2;i++) {
            if(i>0 && nums[i]===nums[i-1]) continue;
            let target = nums[i];
            let start = i+1;
            let end = nums.length-1;
            while(start<end) {
                if(nums[start]+nums[end]+target===0) {
                    result.push([nums[start], nums[end], target]);
                    while(start < end && nums[start]===nums[start+1]) start++;
                    while(start < end && nums[end]===nums[end-1]) end--;
                    start++;
                    end--;
                }
                else if(nums[start]+nums[end]+target>0) {
                    end--;
                } else {
                    start++;
                }
            }
        }
        return result;
    }
}
