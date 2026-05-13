class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    binSearch(nums, start, end, target) {
        let s = start, e = end;
        while(s<=e) {
            const m = Math.floor(s+(e-s)/2);
            if(nums[m]===target) {
                return m;
            } else if(nums[m]>target) {
                e = m-1;
            } else {
                s = m+1;
            }
        }
        return -1;
    }

    findMinIndex(nums) {
        let start = 0, end = nums.length-1;
        while(start<end) {
            let mid = Math.floor(start + (end-start)/2);
            if(nums[mid]>nums[end]) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return start;
    }

    search(nums, target) {
        const idx = this.findMinIndex(nums);
        if(idx===0) return this.binSearch(nums, 0, nums.length-1, target);
        const attempt1 = this.binSearch(nums, 0, idx-1, target);
        const attempt2 = this.binSearch(nums, idx, nums.length-1, target);
        return attempt1 >=0? attempt1: attempt2;
    }
}
