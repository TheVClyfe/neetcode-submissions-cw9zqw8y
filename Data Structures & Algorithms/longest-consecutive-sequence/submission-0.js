class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let length = 0;
        let longest = 0;
        for(const num of set) {
            let curr = num;
            if(!set.has(curr-1)) {
                length++;
                while(set.has(curr+1)) {
                    length++;
                    curr++;
                }
                longest = Math.max(length, longest);
                length = 0;
            } else {
                continue;
            }
        }        
        return longest;
    }
}
