class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if(s.length===0) return 0;
        let charCount = new Array(26).fill(0);
        let left = 0;
        let right = 0;
        let maxFreq = 0;
        let result = 0;
        
        for(right = 0; right < s.length; right++) {
            let charIndex = s.charCodeAt(right) - 'A'.charCodeAt(0);
            charCount[charIndex]++;
            maxFreq = Math.max(maxFreq, charCount[charIndex]);

            // to ensure that only max K replacements are needed for this substring
            while((right-left+1)-maxFreq > k) {
                let leftCharIndex = s.charCodeAt(left) - 'A'.charCodeAt(0);
                charCount[leftCharIndex]--;
                left++;
            }
            // as the loop above has already taken care of <=k requirement
            result = Math.max(right-left+1, result);
        }

        // while(right<s.length) {
        //     // we primarily move the right pointer initially
        //     // we keep track of the most mostFrequentCharacter and mostFrequentCount
        //     // while moving right, for each character that does not match mostFrequentCharacter, 
        //     // we keep replacing it till k reaches 0
        //     // once k is 0, we increment left pointer and increment k again
        // }

        return result;
    }
}
