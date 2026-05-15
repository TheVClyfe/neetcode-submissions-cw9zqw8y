class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        if(nums.length<=0) return nums;
        let result = [];
        
        const pickAndAdd = (index, currentSubset) => {
            if(index===nums.length) {
                result.push([...currentSubset]);
                return;
            }
            
            // here, we exclude current item, and move on to next
            pickAndAdd(index+1, currentSubset);
            
            // here, we include current item and move onto next
            currentSubset.push(nums[index]);
            pickAndAdd(index+1, currentSubset);

            // here, we pop it out, to ensure that after one round of processing, it doesn't affect "other paths"
            currentSubset.pop();
        }
        pickAndAdd(0, []);
        return result;
    }
}
