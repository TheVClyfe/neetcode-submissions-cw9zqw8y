class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let result = [];
        nums.sort();

        const tryOutSubsets = (nums, index, currentSet) => {
            if(index===nums.length) {
                result.push([...currentSet]);
            } else {
                //include
                currentSet.push(nums[index]);
                tryOutSubsets(nums, index+1, currentSet);
                currentSet.pop();

                while(index+1!==nums.length && nums[index]===nums[index+1]) {
                    index++;
                }
                //exclude case
                tryOutSubsets(nums, index+1, currentSet);
            }
        }

        tryOutSubsets(nums, 0, []);
        return result;
    }
}
