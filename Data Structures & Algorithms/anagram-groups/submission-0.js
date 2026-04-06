class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        const map = new Map();
        for(const str of strs) {
            const key = str.split('').sort().join('');
            if(map.has(key)) {
                map.get(key).push(str);
            } else {
                map.set(key, [str]);
            }
        }
        return [...map.values()];
    }
}
