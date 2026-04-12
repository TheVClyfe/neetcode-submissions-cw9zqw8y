class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isAlphanumeric(char) {
        return /^[a-z0-9]$/i.test(char);
    }

    isPalindrome(s) {
        let start = 0;
        let end = s.length-1;
        while(start<=end) { 
            while(start<end && !this.isAlphanumeric(s.charAt(start))) start++;
            while(end > start && !this.isAlphanumeric(s.charAt(end))) end--;
            if(s.charAt(start).toLowerCase()===s.charAt(end).toLowerCase()) {
                start++;
                end--;
            } else {
                return false;
            }
        }
        return true;
    }
}
