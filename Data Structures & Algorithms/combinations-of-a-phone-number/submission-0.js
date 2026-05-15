class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits.length===0) return [];
        let map = new Map();
        map[2] = "abc";
        map[3] = "def";
        map[4] = "ghi";
        map[5] = "jkl";
        map[6] = "mno";
        map[7] = "pqrs";
        map[8] = "tuv";
        map[9] = "wxyz";

        let result = [];
        const calcFunc = (str, index) => {
            if(str.length===digits.length) {
                result.push(str);
                return;
            }

            const mappedCharas = map[Number(digits[index])];
            for(let i=0;i<mappedCharas.length;i++) {
                // either pick the character from current
                const tempStr = str+mappedCharas[i];
                calcFunc(tempStr, index+1);
            }
        }
        calcFunc("", 0);
        return result;
    }
}
