class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0, end = nums.length-1;
        while(start<=end) {
            const mid = Math.floor(start + (end-start)/2);
            if(target===nums[mid]) {
                return mid;
            } else if(target>nums[mid]) {
                start = mid+1;
            } else {
                end = mid-1;
            }
        }

        return -1;
    }
}
