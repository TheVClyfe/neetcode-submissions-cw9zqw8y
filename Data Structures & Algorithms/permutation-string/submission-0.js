class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    arraysEqual(arr1, arr2) {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }

    checkInclusion(s1, s2) {
        if(s1.length>s2.length) return false;
        let charCountsS1 = new Array(26).fill(0);
        let charCountsS2 = new Array(26).fill(0);

        // Count frequency for s1
        for (let char of s1) {
            charCountsS1[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let left = 0;

        for (let right = 0; right < s2.length; right++) {
            const idx = s2.charCodeAt(right) - 'a'.charCodeAt(0);
            charCountsS2[idx]++;
            
            if (right - left + 1 > s1.length) {
                const leftIdx = s2.charCodeAt(left) - 'a'.charCodeAt(0);
                charCountsS2[leftIdx]--;
                left++;
            }
            
            if (right - left + 1 === s1.length && this.arraysEqual(charCountsS1, charCountsS2)) {
                return true;
            }
        }
        
        return false;

        // // first get the counts for the each char code for first string
        // for(let i=0;i<s1.length;i++) {
        //     let charIndex = s1.charCodeAt(i)-'A'.charCodeAt(0);
        //     charCountsS1[charIndex]++;
        // }

        // let charCountsS2 = new Array(26).fill(0);
        // let left = 0;
        // let right = 0; //(right - left) + 1 can go upto s1.length at any point
        // while(right<s2.length) {
        //     let charIndex2 = s2.charCodeAt(right)-'A'.charCodeAt(0);
        //     charCountsS2[charIndex2]++;
        //     // get to the window
        //     while(right - left + 1 < s1.length) {
        //         right++;
        //         charIndex2 = s2.charCodeAt(right)-'A'.charCodeAt(0);
        //     }
        //     // compare charCountsS1 and charCountsS2, if equal, return true 
        //     // else increment left by 1 and reduce count index for left
        // }
        // return false;
    }
}
