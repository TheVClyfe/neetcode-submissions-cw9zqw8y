class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = [];
        candidates.sort();
        const tryOutCombination = (candidates, index, target, currentSet) => {
            if(index===candidates.length && target!==0) {
                return;
            } else if(target<0) {
                return;
            } else if(target===0) {
                result.push([...currentSet]);
            } else {
                //include branch
                currentSet.push(candidates[index]);
                tryOutCombination(candidates, index+1, target-candidates[index], currentSet);
                currentSet.pop();

                while(index+1<candidates.length && candidates[index]===candidates[index+1]) {
                    index++;
                }
                //exclude
                tryOutCombination(candidates, index+1, target, currentSet);
            }
        }
        tryOutCombination(candidates, 0, target, []);
        return result;
    }
}
