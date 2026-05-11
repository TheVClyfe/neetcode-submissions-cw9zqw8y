class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    map = new Map();

    robN(nums, n) {
        if(n<0) return 0;
        if(n===0) return nums[0];
        if(this.map.has(n)) return this.map.get(n);

        let skip = this.robN(nums, n-1);
        let rob = nums[n] + this.robN(nums, n-2);

        let result = Math.max(skip, rob);
        this.map.set(n, result);
        return result;

        // if(n===0) return nums[0];
        // else if(n===1) return Math.max(nums[0], nums[1]);
        // else if(n===2) {
        //     return Math.max(nums[1], nums[0]+nums[2]);
        // } else {
        //     let maxTillThreeHousesAgo, maxTillTwoHousesAgo;
        //     if(this.map.has(n-3)) maxTillThreeHousesAgo = this.map.get(n-3);
        //     else {
        //         maxTillThreeHousesAgo = this.robN(nums, n-3);
        //         this.map.set(n-3, maxTillThreeHousesAgo);
        //     }
        //     if(this.map.has(n-2)) maxTillTwoHousesAgo = this.map.get(n-2);
        //     else {
        //         maxTillTwoHousesAgo = this.robN(nums, n-2);
        //         this.map.set(n-2, maxTillTwoHousesAgo);
        //     }
        //     return Math.max(nums[n-1] + maxTillThreeHousesAgo, nums[n] + maxTillTwoHousesAgo);
        // }
    }

    rob(nums) {
        if(nums.length===1) return nums[0];
        this.map.clear();
        let firstToSecondLast = this.robN(nums.slice(0, nums.length-1), nums.length-2);
        this.map.clear();
        let secondToLast = this.robN(nums.slice(1, nums.length), nums.length-2);
        return Math.max(firstToSecondLast, secondToLast);
    }
}
