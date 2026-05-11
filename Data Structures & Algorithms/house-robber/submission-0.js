class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    map = new Map();

    robN(nums, n) {
        if(n==0) return nums[0];
        if(n<=1) {
            return Math.max(nums[0], nums[1]);
        } else if(n==2) {
            return Math.max(nums[1], nums[2] + nums[0]);
        } else {
            let maxTillThreeHousesAgo, maxTillTwoHousesAgo;
            if(this.map.has(n-3)) maxTillThreeHousesAgo = this.map.get(n-3);
            else {
                maxTillThreeHousesAgo = this.robN(nums, n-3);
                this.map.set(n-3, maxTillThreeHousesAgo);
            }
            if(this.map.has(n-2)) maxTillTwoHousesAgo = this.map.get(n-2);
            else {
                maxTillTwoHousesAgo = this.robN(nums, n-2);
                this.map.set(n-2, maxTillTwoHousesAgo);
            }
            return Math.max(nums[n-1] + maxTillThreeHousesAgo, nums[n]+maxTillTwoHousesAgo);
        }
    }

    rob(nums) {
        this.map.clear();
        return this.robN(nums, nums.length-1);
    }
}
