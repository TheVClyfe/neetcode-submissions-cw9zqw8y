class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [];
        let tempBoolArr = new Array(nums.length).fill(false);
        const calcPermutes = (nums, tempBoolArr, currentSet) => {
            if(currentSet.length===nums.length) {
                result.push([...currentSet]);
            } else {
                for(let i=0;i<nums.length;i++) {
                    if(tempBoolArr[i]===true) continue;
                    else {
                        tempBoolArr[i]=true;
                        currentSet.push(nums[i]);
                        calcPermutes(nums, tempBoolArr, currentSet);
                        tempBoolArr[i]=false;
                        currentSet.pop();
                    }
                }
            }
        }

        calcPermutes(nums, tempBoolArr, []);
        return result;
    }
}
