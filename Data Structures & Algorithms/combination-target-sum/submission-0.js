class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];
        
        const tryOutCombinations = (nums, index, target, currentSet) => {
            if(index===nums.length && target!==0) return;
            if(target<0) {
                return;
            } else if(target===0) {
                result.push([...currentSet]);
            } else {
                // we either pick current number, or we don't 
                tryOutCombinations(nums, index+1, target, currentSet); // we don't pick it

                currentSet.push(nums[index]);

                //when we pick it, we can try to pick it again
                tryOutCombinations(nums, index, target-nums[index], currentSet); 
                currentSet.pop();
            }
        }

        tryOutCombinations(nums, 0, target, []);
        return result;
        
    }
}
