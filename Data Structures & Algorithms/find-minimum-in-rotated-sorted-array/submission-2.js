class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    findMin(nums) {
        let start = 0, end = nums.length-1;
        while(start<end) {
            const mid = Math.floor(start + (end-start)/2);
            if(nums[mid]>nums[end]) {
                start = mid+1;
            } else {
                end = mid;
            }
            // INITIAL - don't need to compare neighbours, but just use compare with end
            // if(nums[mid]<nums[mid-1] && nums[mid]<nums[mid+1]) {
            //     return nums[mid];
            // } else if(nums[mid]>nums[mid-1] && nums[mid]<nums[mid+1]) {
            //     start = mid+1;
            // } else {
            //     end = mid-1;
            // }
        }
        return nums[start];
    }
}
