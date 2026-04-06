class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map = new Map();
        for(const letter of s) {
            if(map.has(letter)) {
                map.set(letter, map.get(letter)+1);
            } else {
                map.set(letter, 1);
            }
        }
        for(const letter of t) {
            if(map.has(letter)){
                map.set(letter, map.get(letter)-1);
            } else {
                return false;
            }
        }
        for(const num of map.values()) {
            if(num!==0) {
                return false;
            }
        }
        return true;
    }
}
